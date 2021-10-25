import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  RESET_REGISTER_SUCCESS,
} from "./types";

export const register =
  (first_name, last_name, username, password, re_password) =>
  async (dispatch) => {
    const body = JSON.stringify({
      first_name,
      last_name,
      username,
      password,
      re_password,
    });

    dispatch({
      type: SET_AUTH_LOADING,
    });

    try {
      const res = await fetch("/api/account/register", {
        method: "POST",
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (res.status === 201) {
        dispatch({
          type: REGISTER_SUCCESS,
        });
      } else {
        dispatch({
          type: REGISTER_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
      });
    }

    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
  };

export const reset_register_success = () => (dispatch) => {
  dispatch({
    type: RESET_REGISTER_SUCCESS,
  });
};

export const login = (username, password) => async (dispatch) => {
  const body = JSON.stringify({
    username,
    password,
  });

  dispatch({
    type: SET_AUTH_LOADING,
  });

  try {
    const res = await fetch("api/account/login", {
      method: 'POST',
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }

  dispatch({
    type: REMOVE_AUTH_LOADING,
  });
};
