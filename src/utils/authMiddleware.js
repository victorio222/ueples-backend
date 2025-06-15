import jwt from 'jsonwebtoken';

function authHeader(req, res, next) {
    const authHeader = req.header("Authorization");
    if(!authHeader) return res.status(401).json({ message: "Unauthorized: Missing Token" });
    const parts = authHeader.split(" ");
    if(parts.length !== 2|| parts[0] !== "Bearer") {
        return res.status(401).json({ message: "Unauthorized: Invalid Token Format" });
    };
    const token = parts[1];
    
    jwt.verify((token, process.env.JWT_SECRETKEYTOKEN), (err, decodedUser) => {
        if(err) return res.status(403).json({ message: "Forbidden: Invalid Token" });
        req.user = decodedUser;
        next();
    })
}

function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRETKEYTOKEN);
    } catch(error) {
        return null;
    }
}

function verifyRefreshToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_REFRESHSECRETKEYTOKEN)
    } catch(error) {
        return null;
    }
}

export default {
    authHeader,
    verifyToken,
    verifyRefreshToken
}