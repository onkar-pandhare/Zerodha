const { UserModel: User } = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    // ✅ Validate required fields
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format", success: false });
    }

    // ✅ Validate password length
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters", success: false });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }

    const user = await User.create({ email, password, name: username });
    const token = createSecretToken(user._id);

   res.cookie("token", token, {
  httpOnly: false,
  secure: true,           // ← required for HTTPS
  sameSite: "none",       // ← required for cross-domain
});

    res.status(201).json({ message: "User signed up successfully", success: true });
    next();
  } catch (error) {
    console.error("Signup error:", error);
    // ✅ Always send response even on error
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password", success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect email or password", success: false });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      secure: true,        // ← fixed
      sameSite: "none",    // ← fixed
    });

    res.status(200).json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};