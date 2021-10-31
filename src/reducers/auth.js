import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  RESET_REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  REFRESH_FAIL,
  REFRESH_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
} from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  register_success: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        register_success: true,
      };
    case RESET_REGISTER_SUCCESS:
      return {
        ...state,
        register_success: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
      };
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case REFRESH_SUCCESS:
      return {
        ...state,
      };
    case REFRESH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_AUTH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
      };
    case RESET_PASSWORD_CONFIRM_SUCCESS:
      return {
        ...state,
      };
    case RESET_PASSWORD_CONFIRM_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
