import jwt from 'jsonwebtoken';

function generateToken(user) {
    const payload = {
        userId: user.userId,
        email: user.email
    }

    return jwt.sign(
        payload,
        process.env.JWT_SECRETKEYTOKEN,
        { expiresIn: '1h'}
    )
}

function generateRefreshToken(user) {
    const payload = {
        userId: user.userId,
        email: user.email
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