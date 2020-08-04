export const actionTypes = {
  GET_COOKIE_NO_VALUE: "GET_COOKIE_NO_VALUE",
  LOGIN: "LOGIN",
  LOGIN_FAILED: "LOGIN_FAILED",
  REQESST_LOGOUT: "REQESST_LOGOUT",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  UPDATE_USER: "UPDATE_USER",
  CLEAR_USER: "CLEAR_USER",
  GET_USERNAME_FROM_COOKIE: "GET_USERNAME_FROM_COOKIE"
};

export const actions = {
  startLogin: userInfo => ({
    type: actionTypes.LOGIN,
    userInfo
  }),
  loginFailed: error => ({
    type: actionTypes.LOGIN_FAILED,
    error
  }),
  updateUser: userData => ({
    type: actionTypes.UPDATE_USER,
    userData
  }),
  reqLogout: () => ({
    type: actionTypes.REQESST_LOGOUT
  }),
  logout: () => ({
    type: actionTypes.LOGOUT_SUCCESS
  }),
  getUsernameFromCookie: () => ({
    type: actionTypes.GET_USERNAME_FROM_COOKIE
  }),
  getCookieNoValue: () => ({
    type: actionTypes.GET_COOKIE_NO_VALUE
  })
};

export default function(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_FAILED:
      return { ...state, error: action.error };
    case actionTypes.UPDATE_USER:
      return { ...state, ...action.userData };
    case actionTypes.LOGOUT_SUCCESS:
      return {};
    case actionTypes.GET_COOKIE_NO_VALUE: {
      return { cookie: null };
    }
    default:
      return state;
  }
}
