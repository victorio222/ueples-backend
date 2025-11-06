import jwt from 'jsonwebtoken';

function generateToken(user) {
    const payload = {
        user_id: user.user_id,
        email: user.email,
        role_id: user.role_id
    }

    return jwt.sign(
        payload,
        process.env.JWT_SECRETKEYTOKEN,
        { expiresIn: '1h'}
    )
}

function generateRefreshToken(user) {
    const payload = {
        user_id: user.user_id,
        email: user.email,
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