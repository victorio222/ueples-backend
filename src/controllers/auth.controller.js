import authServices from "../services/auth.services.js";

const register = async (req, res) => {
    try {
        const data = req.body;
        const user = await authServices.registerUser(data);
        res.status(201).json({
            message: "Register successfully!",
            data: user
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, remember_token } = await authServices.login(email, password);
        res.json({
            token,
            remember_token
        })
    } catch (error) {
        const status = error.message === "Invalid credentials!" || error.message === "Email not found" ? 401 : 500;
        res.status(status).json({ message: error.message });
        console.error(error);
    }
}

const logout = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await authServices.logout(email);
        if (!user) {
            return res.status(404).json({ message: "Email not found" });
        }
        res.status(200).json({ message: "Logged out successfully!" });
    } catch (error) {
        res.status().json({ message: error.message });
        console.error(error);
    }

}

const refreshToken = async (req, res) => {
    try {
        const { remember_token } = req.body;
        if (!remember_token) res.status(400).json({ message: "Missing remember token!" });

        const newToken = await authServices.rememberToken(remember_token);
        res.json({ newToken })
    } catch (error) {
        console.error("Refresh failed:", error.message, refreshToken);
        res.status(401).json({ message: error.message });
    }
}

const verifyEmail = async (req, res) => {
    try {
        const { token } = req.query;
        await authServices.verifyEmail(token);
        res.status(200).json({ message: "Email verified successfully!" });
    } catch (error) {
        res.status(400).json({ message: "Invalid or expired token." });
        console.error(error);
    }
};

export default {
    login,
    logout,
    refreshToken,
    register,
    verifyEmail
}