import homeReducer from "./home";
import searchReducer from "./search";
import cityReducer from "./city";
import loginReducer from "./login";
import switchReducer from "./switch";
import buttonReducer from "./button";
import detailReducer from "./detail";
import shop from "./shop";
import photos from "./photos";

export default {
  ad: homeReducer.adReducer,
  userInfo: homeReducer.userInfoReducer,
  reqStatus: homeReducer.reqStatusReducer,
  guessULike: homeReducer.guessReducer,
  searchIntro: searchReducer,
  hotCity: cityReducer,
  loginStatus: loginReducer,
  switchStatus: switchReducer,
  buttonStatus: buttonReducer,
  detailInfo:detailReducer,
  shopInfo:shop,
  photos
};
