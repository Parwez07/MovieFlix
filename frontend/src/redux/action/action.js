import axios from "axios";

//register user
export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "RegisterRequest",
    });

    const { data } = await axios.post(`/register`, { name, email, password });

    dispatch({
      type: "RegisterSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "RegisterFailure",
      payload: error.response.data.message,
    });
  }
};

//login user
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
    const { data } = await axios.post(`/login`, { email, password });

    dispatch({
      type: "LoginSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const { data } = await axios.get(`/profile`);

    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutRequest",
    });

    const { data } = await axios.get(`/logout`);

    dispatch({
      type: "LogoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data.message,
    });
  }
};

export const addremoveFav =
  (movieId, poster, title, catagory) => async (dispatch) => {
    try {
      dispatch({
        type: "AddRemoveRequest",
      });

      const { data } = await axios.put(`/liked`, {
        movieId,
        poster,
        title,
        catagory,
      });

      dispatch({
        type: "AddRemoveSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "AddRemoveFailure",
        payload: error.response.data.message,
      });
    }
  };
