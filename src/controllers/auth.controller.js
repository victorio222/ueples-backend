import authServices from "../services/auth.services.js";

/**
 * Cookie Configuration
 * httpOnly: true prevents XSS (JavaScript cannot access the token)
 * secure: false is used for LAN/HTTP. Set to true if using HTTPS.
 * sameSite: 'Lax' protects against CSRF while allowing standard navigation.
 */
const cookieOptions = {
    httpOnly: true,
    // secure: true, 
    // sameSite: 'none',
    secure: false,
    sameSite: 'lax',
    path: '/',
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Service now returns the role name along with tokens
        const { token, remember_token, role, user_id, status } = await authServices.login(email, password);

        // 1. Set Access Token Cookie (1 Hour)
        res.cookie('token', token, { 
            ...cookieOptions, 
            // maxAge: 60 * 60 * 1000 
        });

        // 2. Set Refresh Token Cookie (7 Days)
        res.cookie('remember_token', remember_token, { 
            ...cookieOptions, 
            // maxAge: 7 * 24 * 60 * 60 * 1000 
        });

        // 3. Send non-sensitive info to frontend
        res.status(200).json({
            message: "Login successful",
            data: { email, role, user_id, status }
        });
    } catch (error) {
        const status = (error.message === "Invalid credentials!" || error.message === "Email not found") ? 401 : 500;
        res.status(status).json({ message: error.message });
        console.error("Login Error:", error);
    }
};

const logout = async (req, res) => {
    try {
        const { email } = req.body;
        await authServices.logout(email);

        // CLEAR BOTH COOKIES WITH EXPLICIT PATH
        res.clearCookie('token', { 
            path: '/', 
            httpOnly: true 
        });
        res.clearCookie('remember_token', { 
            path: '/', 
            httpOnly: true 
        });

        res.status(200).json({ message: "Logged out successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const refreshToken = async (req, res) => {
    try {
        console.log("Cookies received:", req.cookies);
        const oldRefreshToken = req.cookies.remember_token;

        if (!oldRefreshToken) {
            console.error("No refresh token found in cookies");
            return res.status(401).json({ message: "No refresh token" });
        }

        const newToken = await authServices.rememberToken(oldRefreshToken);
        console.log("New Access Token generated successfully");

        res.cookie('token', newToken, { 
            ...cookieOptions, 
            // maxAge: 60 * 60 * 1000 
        });

        res.status(200).json({ message: "Token refreshed successfully" });
    } catch (error) {
        console.error("Refresh failed in Service:", error.message); 
        res.status(401).json({ message: "Invalid refresh token" });
    }
};

const register = async (req, res) => {
    try {
        const data = req.body;
        const idCard = req.files?.id_card?.[0];

        const user = await authServices.registerUser(data, idCard);
        
        res.status(201).json({
            message: "Registration successful!",
            data: user
        });
    } catch (error) {
        const status = error.message.includes("required") ? 400 : 500;
        res.status(status).json({ message: error.message });
        console.error("Register Error:", error);
    }
};

const addUser = async (req, res) => {
    try {
        const data = req.body;
        const user = await authServices.addUser(data);
        
        res.status(201).json({
            message: "User added successfully by administrator!",
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const verifyEmail = async (req, res) => {
    try {
        const { token } = req.query;
        if (!token) return res.status(400).json({ message: "Token is required" });

        await authServices.verifyEmail(token);
        res.status(200).json({ message: "Email verified successfully!" });
    } catch (error) {
        res.status(400).json({ message: "Invalid or expired verification link." });
    }
};

export default {
    login,
    logout,
    refreshToken,
    register,
    addUser,
    verifyEmail
};