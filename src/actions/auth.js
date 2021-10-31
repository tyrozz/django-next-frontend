import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  RESET_REGISTER_SUCCESS,
  LOGOUT_FAIL,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  REFRESH_FAIL,
  REFRESH_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS
} from "./types";


export const load_user = () => async (dispatch) => {
  try {
      const res = await fetch('/api/account/user', {
          method: 'GET',
          headers: {
              'Accept': 'application/json'
          }
      });

      const data = await res.json();

      if (res.status === 200) {
          dispatch({
              type: LOAD_USER_SUCCESS,
              payload: data
          });
      } else {
          dispatch({
              type: LOAD_USER_FAIL
          });
      }
  } catch(err) {
      dispatch({
          type: LOAD_USER_FAIL
      });
  }
};

export const check_auth_status = () => async (dispatch) => {
  try {
    const res = await fetch('/api/account/verify', {
      method: 'GET', 
      headers: {
        'Accept': 'application/json',
      }
    });

    if(res.status === 200) {
      dispatch({
        type: AUTHENTICATED_SUCCESS
      });
      dispatch(load_user());
    } else {
      dispatch({
        type: AUTHENTICATED_FAIL
      })
    }

  } catch(err) {
    dispatch({
      type: AUTHENTICATED_FAIL
    });
  }
};

export const request_refresh = () => async (dispatch) => {
  try {
    const res = await fetch('/api/account/refresh', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if(res.status === 200) {
      dispatch({
        type: REFRESH_SUCCESS
      });
      dispatch(check_auth_status());
    } else {
      dispatch({
        type: REFRESH_FAIL
      });
   }
  } catch(err) {
    dispatch({
      type: REFRESH_FAIL
    });
  }
}


export const register =
  (first_name, last_name, username, password, re_password,email) =>
  async (dispatch) => {
    const body = JSON.stringify({
      first_name,
      last_name,
      username,
      password,
      re_password,
      email,
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
    const res = await fetch("/api/account/login", {
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
      dispatch(load_user());
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


export const logout = () => async dispatch => {
  try {
      const res = await fetch('/api/account/logout', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
          }
      });

      if (res.status === 200) {
          dispatch({
              type: LOGOUT_SUCCESS
          });
      } else {
          dispatch({
              type: LOGOUT_FAIL
          });
      }
  } catch(err) {
      dispatch({
          type: LOGOUT_FAIL
      });
  }
};


export const reset_password = (email) => async (dispatch) => {
  const body = JSON.stringify({
    email,
  });

  try {
     const res = await fetch('/api/account/resetpassword', {
      method: "POST",
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
        },
        body: body,
    });

    if(res.status === 200) {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
      });
      dispatch(logout());
    } else {
      dispatch({
        type: RESET_PASSWORD_FAIL,
      });
    }
  } catch(err) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
    });
  }
}


export const reset_password_confirm = (uid, token, new_password1, new_password2) => async (dispatch) => {
  const body = JSON.stringify({
    uid,
    token,
    new_password1,
    new_password2
  });

  try {
    const res = await fetch('/api/account/resetpasswordconfirm', {
     method: "POST",
       headers: {
         'Accept': "application/json",
         "Content-Type": "application/json",
       },
       body: body,
   });

   if(res.status === 200) {
     dispatch({
       type: RESET_PASSWORD_CONFIRM_SUCCESS,
     });
   } else {
     dispatch({
       type: RESET_PASSWORD_CONFIRM_FAIL,
     });
   }
 } catch(err) {
   dispatch({
     type: RESET_PASSWORD_CONFIRM_FAIL,
   });
 }


}
