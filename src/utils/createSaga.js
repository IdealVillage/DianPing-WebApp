import { actions } from "@ducks/commonRequest";
import { take, call, put } from "redux-saga/effects";
import { get } from "../Api/get";
import { post } from "../Api/post";

function createReqSagas(enhancer) {
  return function*(request) {
    yield put(actions.requestStart());
    try {
      const res = yield call(get, request.url);
      enhancer&&enhancer(res)
      return res;
    } catch (err) {
      yield put(actions.requestError(err));
    } finally {
      yield put(actions.requestDown());
    }
  };
}

function createPostSagas() {
  return function*({request}) {
    yield put(actions.requestStart());
    try {
      const res = yield call(post, request.url, {
        body: JSON.stringify({
          ...request.payload
        })
      });
      return res.message
    } catch (err) {
      yield put(actions.requestError(err));
    } finally {
      yield put(actions.requestDown());
    }
  };
}

function createHandleSagas(actionType, action, cb) {
  return function*() {
    while (true) {
      const request = yield take(actionType);
      const resData = yield call(cb, request);
      yield put(action(resData));
    }
  };
}

export { createReqSagas, createHandleSagas, createPostSagas };
