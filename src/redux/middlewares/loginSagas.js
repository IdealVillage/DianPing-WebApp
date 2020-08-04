import { actionTypes, actions } from "../../ducks/login";
import { take, call, put } from "redux-saga/effects";
import { push,replace } from "connected-react-router";
import { post } from "../../Api/post";
import cookie from "../../utils/cookie";

function* setCookie(key, value) {
  yield cookie.setItem(key, JSON.stringify(value));
}

function* delCookie(key) {
  yield console.log('执行到了这一步')
  yield cookie.removeItem(key);
}

function* getCookie(key) {
  const result = yield cookie.getItem(key);
  return result;
}

function* loginFlow() {
  while (true) {
    yield take(actionTypes.GET_USERNAME_FROM_COOKIE);
    try {
      let result = yield call(getCookie, "user");
      result = JSON.parse(result);
      if (!result) {
        
      } else {
        yield put(actions.updateUser(result));
      }
    } catch (err) {
      console.log("err: ", err);
    }
    //login logic
    const {
      userInfo: { phoneNumber, password }
    } = yield take(actionTypes.LOGIN);
    const res = yield call(post, "/api/login", {
      body: JSON.stringify({
        phoneNumber,
        password
      })
    });
    if (res.code === 200) {
      yield put(actions.updateUser(res.message));
      yield call(setCookie, "user", res.message);
      yield put(push("/user"));
    } else {
      yield put(actions.loginFailed(res.error));
    }
    //logout logic
    yield take(actionTypes.REQESST_LOGOUT);
    yield call(delCookie, "user");
    yield put(actions.logout());
    yield put(replace('/'));
  }
}

export default loginFlow;
