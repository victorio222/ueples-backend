import jwt from 'jsonwebtoken';

export function generateToken(user) {
    // Access the joined role name from the repository include
    // user.role matches the 'as: "role"' alias in your repository
    const roleName = user.role ? user.role.role_name : null;

    const payload = {
        user_id: user.user_id,
        email: user.email,
        role: roleName, // This provides the string (e.g., 'Admin') for the middleware
        role_id: user.role_id
    }

    return jwt.sign(
        payload,
        process.env.JWT_SECRETKEYTOKEN,
        { expiresIn: '1m'}
    )
}

export function generateRefreshToken(user) {
    const roleName = user.role ? user.role.role_name : null;

    const payload = {
        user_id: user.user_id,
        email: user.email,
        role: roleName,
        role_id: user.role_id
    }

    return jwt.sign(
        payload,
        process.env.JWT_REFRESHSECRETKEYTOKEN,
        { expiresIn: '7d' }
    )
}

export default {
    generateToken,
    generateRefreshToken
};