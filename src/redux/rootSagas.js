import {
  homeSagas,
  adSagas,
  guessSagas,
  searchSagas,
  citySagas,
  loginSagas,
  detailSagas,
  shopSagas,
  photoSagas
} from "./middlewares";
import { fork, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    fork(homeSagas),
    fork(adSagas),
    fork(guessSagas),
    fork(searchSagas),
    fork(citySagas),
    fork(loginSagas),
    fork(detailSagas),
    fork(shopSagas),
    fork(photoSagas)
  ]);
}
