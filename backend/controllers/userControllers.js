import { User } from "../models/userSchema.js";

//register user
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email Already exists!!",
      });
    }

    user = await User.create({ name, email, password });
    const token = await user.genarateToken();
    let options = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({
      success: true,
      message: "Registered successfully !",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found !!",
      });
    }

    const matchPassword = await user.comparePassword(password);
    if (!matchPassword) {
      return res.status(400).json({
        message: "Invalid login credentials !!",
      });
    }

    const token = await user.genarateToken();
    let options = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      message: "Successfully Logged in !!",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//logout user
export const logout = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    let options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };

    res.status(200).cookie("token", null, options).json({
      success: true,
      message: "Logged out successfully !!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// profile of user
export const profile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// add or remove from favorites
export const addremoveFavorites = async (req, res) => {
  try {
    const { movieId, poster, title, catagory } = req.body;
    const user = await User.findById(req.user._id);

    //check if already added then -> remove from liked
    const arr = user.favorites;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].movieId === movieId) index = i;
    }
    if (index != -1) {
      user.favorites.splice(index, 1);

      await user.save();
      return res.status(200).json({
        message: "Deleted from liked !!",
      });
    } else {
      //.......... else ........... -> add into liked
      user.favorites.push({ movieId, poster, title, catagory });

      await user.save();
      return res.status(200).json({
        success: true,
        message: "Added to liked !!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
