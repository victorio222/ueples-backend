import bcrypt from 'bcrypt';
import authRepository from "../repositories/auth.repository.js";
import jwtUtils from '../utils/jwtUtils.js';
import authMiddleware from '../utils/authMiddleware.js';
import emailUtils from '../utils/emailUtils.js';

const login = async (email, password) => {
    try {
        const user = await authRepository.findByEmail(email);
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!user) {
            throw new Error("Email not found")
        }
        // if(!isPasswordMatch) {
        //     throw new Error("Incorrect password")
        // }
        if(password !== user.password) {
            throw new Error("Incorrect password");
        }

        const token = jwtUtils.generateToken(user);
        const remember_token = jwtUtils.generateRefreshToken(user);

        await authRepository.updateToken(user.user_id, remember_token);
        return { token, remember_token };
    } catch (error) {
        console.error(error);
        throw new Error("Invalid credentials!")
    }
}

const logout = async (email) => {
    const user = await authRepository.findByEmail(email);
    if(!user) return false;
    user.remember_token = null;
    await user.save();
    return true;
}

const rememberToken = async (oldToken) => {
    const decodedUser = authMiddleware.verifyRefreshToken(oldToken);
    try {
        const user = await authRepository.findByEmail(decodedUser.email);
        if(!user || user.remember_token !== oldToken) {
            throw new Error("Remember token mismatch or user not found");
        };
        const newAccessToken = jwtUtils.generateToken(user);
        return newAccessToken;
    } catch (error) {
        console.log(error);
        throw new Error("(Invalid or expired token")
    }
}

const registerUser = async (data) => {
  const user = await authRepository.create(data);

//   const verifyLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
//   await emailUtils.sendVerificationEmail(user.email, verifyLink);

  return user;
};

const verifyEmail = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_EMAIL_SECRET);
    const user = await User.findOne({ where: { email: decoded.email } });
    if (!user) throw new Error("User not found");

    user.is_verified = true;
    await user.save();

    return true;
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};

export default {
    login,
    logout,
    rememberToken,
    registerUser,
    verifyEmail
}