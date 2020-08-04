import {
  createHandleSagas,
  createPostSagas,
  createReqSagas
} from "../../utils/createSaga";
import { actionTypes, actions } from "../../ducks/detail";
import { all, fork } from "redux-saga/effects";

const logger = message => console.log("enhancer logger: ", message);

const getDes = createHandleSagas(
  actionTypes.GET_DESTINATION,
  actions.updateDestination,
  createReqSagas(logger)
);

const getRec = createHandleSagas(
  actionTypes.GET_RECOMMEND,
  actions.updateRecommend,
  createPostSagas()
);

function* detailFlow() {
  yield all([fork(getDes), fork(getRec)]);
}

export default detailFlow;
