import { actionTypes, actions } from "../../ducks/shop";
import { createHandleSagas, createReqSagas } from "../../utils/createSaga";
import { fork, all } from "redux-saga/effects";

const getComment = createHandleSagas(
  actionTypes.GET_COMMENT,
  actions.updateComment,
  createReqSagas()
);

const getGroupInfo = createHandleSagas(
  actionTypes.GET_GROUP_INFO,
  actions.updateGroupInfo,
  createReqSagas()
);

const getRecommend = createHandleSagas(
  actionTypes.GET_RECOMMEND,
  actions.updateRecommend,
  createReqSagas()
);

const getAd = createHandleSagas(
  actionTypes.GET_AD,
  actions.updateAd,
  createReqSagas()
);

const getRelation = createHandleSagas(
  actionTypes.GET_RELATION,
  actions.updateRelation,
  createReqSagas()
);

export default function*() {
  yield all([
    fork(getComment),
    fork(getGroupInfo),
    fork(getRecommend),
    fork(getAd),
    fork(getRelation)
  ]);
}
