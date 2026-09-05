import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/jwt.util.js';

async function authToken(req, res, next) {
    let token = req.cookies?.token || req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing Token" });
    }

    jwt.verify(token, process.env.JWT_SECRETKEYTOKEN, (err, decodedUser) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                const refreshToken = req.cookies?.remember_token;

                if (!refreshToken) {
                    return res.status(401).json({ message: "Expired" }); // Short message for interceptor
                }

                const decodedRefresh = verifyRefreshToken(refreshToken);
                
                if (!decodedRefresh) {
                    return res.status(403).json({ message: "Invalid Refresh Token" });
                }

                // IMPORTANT: Only pass the data, not the old iat/exp
                const payload = { 
                    user_id: decodedRefresh.user_id, 
                    role: decodedRefresh.role,
                    email: decodedRefresh.email 
                };

                const newAccessToken = generateToken(payload);

                // Update cookie
                res.cookie('token', newAccessToken, { 
                    httpOnly: true, 
                    // secure: process.env.NODE_ENV === 'production', // Use secure in prod
                    secure: true,
                    sameSite: 'none',
                    // secure: false,
                    // sameSite: 'Lax',
                    maxAge: 7 * 24 * 60 * 60 * 1000,
                    path: '/'
                });

                res.setHeader('X-New-Access-Token', newAccessToken);
                
                req.user = payload;
                return next();
            }
            return res.status(403).json({ message: "Forbidden: Invalid Token" });
        }
        
        req.user = decodedUser;
        next();
    });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRETKEYTOKEN);
    } catch (error) {
        return null;
    }
}

function verifyRefreshToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_REFRESHSECRETKEYTOKEN);
    } catch (error) {
        return null;
    }
}

/**
 * Middleware to restrict access based on user roles
 * @param {...string} allowedRoles - List of roles permitted to access the route
 */
function authorize(...allowedRoles) {
    return (req, res, next) => {
        // req.user is populated by the authToken middleware above
        if (!req.user || !req.user.role) {
            return res.status(403).json({ message: "Access Denied: No role found in token" });
        }

        // Validate if the user's role is in the allowed list
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ 
                message: `Forbidden: Your role (${req.user.role}) does not have access.` 
            });
        }

        next();
    };
};

export default {
    authToken,
    verifyToken,
    verifyRefreshToken,
    authorize
};