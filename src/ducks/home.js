import { actionTypes as reqActionTypes } from "./commonRequest";
import { actionTypes as cityActionTypes } from "./city";

export const actionTypes = {
  //location
  GET_USER_LOCATION: "GET_USER_LOCATION",
  //userInfo
  USER_INFO_UPDATE: "USER_INFO_UPDATE",
  //ad
  GET_AD: "HOME/GET_AD",
  AD_UPDATE: "HOME/AD_UPDATE",
  //guessULike
  GET_GUESS_U_LIKE: "GET_GUESS_U_LIKE",
  GUESS_U_LIKE_UPDATE: "GUESS_U_LIKE_UPDATE",
  //switch
  USER_TAB_SWITCH: "USER_TAB_SWITCH"
};

export const actions = {
  getUserLocation: url => ({
    type: actionTypes.GET_USER_LOCATION,
    url
  }),
  userInfoUpdate: data => ({
    type: actionTypes.USER_INFO_UPDATE,
    data
  }),
  getAd: url => ({
    type: actionTypes.GET_AD,
    url
  }),
  adUpdate: cheaps => ({
    type: actionTypes.AD_UPDATE,
    cheaps
  }),
  getGuessULike: url => ({
    type: actionTypes.GET_GUESS_U_LIKE,
    url
  }),
  guessULikeUpdate: data => ({
    type: actionTypes.GUESS_U_LIKE_UPDATE,
    data
  }),
  userTabSwitch: tab => ({
    type: actionTypes.USER_TAB_SWITCH,
    tab
  })
};

//userInfo
const userInfoReducer = (state = { cityName: "北京", tab: "all" }, action) => {
  switch (action.type) {
    case actionTypes.USER_INFO_UPDATE:
      return {
        ...state,
        cityName: action.data.cityName
      };
    case cityActionTypes.CHANGE_CITY:
      return {
        ...state,
        cityName: action.cityName
      };
    case actionTypes.USER_TAB_SWITCH:
      return {
        ...state,
        tab: action.tab
      };
    default:
      return state;
  }
};

//reqStatus
const reqStatusReducer = (state = { status: "init" }, action) => {
  switch (action.type) {
    case reqActionTypes.REQUEST_START:
      return {
        status: "start"
      };
    case reqActionTypes.REQUEST_SUCCESS:
      return {
        status: "error",
        err
      };
    case reqActionTypes.REQUEST_DOWN:
      return {
        status: "done"
      };
    default:
      return state;
  }
};

const adReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.AD_UPDATE:
      return action.cheaps;
    default:
      return state;
  }
};

const guessReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_U_LIKE_UPDATE:
      return action.data;
    default:
      return state;
  }
};

export default {
  userInfoReducer,
  reqStatusReducer,
  adReducer,
  guessReducer
};
