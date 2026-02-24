// import bcrypt from 'bcrypt';
// import userRepository from "../repositories/user.repository.js";
// import jwtUtils from '../utils/jwt.util.js';
// import authMiddleware from '../middleware/auth.middleware.js';
// // import authMiddleware from '../utils/authMiddleware.js';
// // import emailUtils from '../utils/email.util.js';

// const login = async (email, password) => {
//     const user = await userRepository.findByEmail(email);
//     if (!user) {
//         throw new Error("Email not found")
//     }
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if(!isPasswordMatch) {
//         throw new Error("Incorrect password")
//     }

//     const token = jwtUtils.generateToken(user);
//     const remember_token = jwtUtils.generateRefreshToken(user);

//     await userRepository.updateToken(user.user_id, remember_token);
//     return { token, remember_token };
// }

// const logout = async (email) => {
//     const user = await userRepository.findByEmail(email);
//     if (!user) return false;
//     user.remember_token = null;
//     await user.save();
//     return true;
// }

// const rememberToken = async (oldToken) => {
//     const decodedUser = authMiddleware.verifyRefreshToken(oldToken);
//     try {
//         const user = await userRepository.findByEmail(decodedUser.email);
//         if (!user || user.remember_token !== oldToken) {
//             throw new Error("Remember token mismatch or user not found");
//         };
//         const newAccessToken = jwtUtils.generateToken(user);
//         return newAccessToken;
//     } catch (error) {
//         console.log(error);
//         throw new Error("(Invalid or expired token")
//     }
// }

// const addUser = async (data) => {
//     const hashedPassword = await bcrypt.hash(data.password, 10);
//     data.password = hashedPassword;
//     // if ((data.role === 'Farmer' || data.role === 'Staff') && !idCard) {
//     //   throw new Error("ID card is required for Farmer or Staff");
//     // }

//     // if (idCard) {
//     //   data.id_card = idCard.filename;
//     // }
//     const user = await userRepository.create(data);
//     return user;
// };


// const registerUser = async (data, idCard) => {
//     const hashedPassword = await bcrypt.hash(data.password, 10);
//     data.password = hashedPassword;
//     if ((data.role === 'Farmer' || data.role === 'Staff') && !idCard) {
//       throw new Error("ID card is required for Farmer or Staff");
//     }

//     if (idCard) {
//       data.id_card = idCard.filename;
//     }
//     const user = await userRepository.create(data);

//     //   const verifyLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
//     //   await emailUtils.sendVerificationEmail(user.email, verifyLink);

//     return user;
// };

// // const verifyEmail = async (token) => {
// //     try {
// //         const decoded = jwt.verify(token, process.env.JWT_EMAIL_SECRET);
// //         const user = await User.findOne({ where: { email: decoded.email } });
// //         if (!user) throw new Error("User not found");

// //         user.is_verified = true;
// //         await user.save();

// //         return true;
// //     } catch (err) {
// //         throw new Error("Invalid or expired token");
// //     }
// // };

// export default {
//     addUser,
//     login,
//     logout,
//     rememberToken,
//     registerUser,
//     // verifyEmail
// }















import bcrypt from 'bcrypt';
import userRepository from "../repositories/user.repository.js";
import jwtUtils from '../utils/jwt.util.js';
import authMiddleware from '../middleware/auth.middleware.js';

const login = async (email, password) => {
    // repository findByEmail MUST include the Role model now
    const user = await userRepository.findByEmail(email);
    
    if (!user) {
        throw new Error("Email not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Incorrect password");
    }

    // Generate tokens (jwtUtils now includes user.role.role_name in payload)
    const token = jwtUtils.generateToken(user);
    const remember_token = jwtUtils.generateRefreshToken(user);

    // Save refresh token to DB
    await userRepository.updateToken(user.user_id, remember_token);

    // Return tokens and the role name for the controller
    return { 
        user_id: user.user_id,
        token, 
        remember_token, 
        role: user.role ? user.role.role_name : null,
        status: user.status
    };
}

const logout = async (email) => {
    const user = await userRepository.findByEmail(email);
    if (!user) return false;
    
    // Clear the remember_token in the database
    await userRepository.updateToken(user.user_id, null);
    return true;
}

const rememberToken = async (oldToken) => {
    const decodedUser = authMiddleware.verifyRefreshToken(oldToken);
    
    if (!decodedUser) {
        throw new Error("Invalid or expired token");
    }

    try {
        const user = await userRepository.findByEmail(decodedUser.email);
        
        if (!user || user.remember_token !== oldToken) {
            throw new Error("Remember token mismatch or user not found");
        };

        // Generate a fresh access token
        const newAccessToken = jwtUtils.generateToken(user);
        return newAccessToken;
    } catch (error) {
        console.error(error);
        throw new Error("Invalid or expired token");
    }
}

const addUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const userData = { ...data, password: hashedPassword };
    
    const user = await userRepository.create(userData);
    return user;
};

const registerUser = async (data, idCard) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    // Specific logic for roles requiring ID cards
    if ((data.role === 'Farmer' || data.role === 'Staff') && !idCard) {
      throw new Error("ID card is required for Farmer or Staff");
    }

    const userData = {
        ...data,
        password: hashedPassword,
        id_card: idCard ? idCard.filename : null
    };

    const user = await userRepository.create(userData);
    return user;
};

export default {
    addUser,
    login,
    logout,
    rememberToken,
    registerUser
}