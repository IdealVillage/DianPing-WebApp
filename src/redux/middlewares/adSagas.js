import { actionTypes, actions } from "../../ducks/home";
import { createHandleSagas, createReqSagas } from "../../utils/createSaga";

const getAd = createReqSagas();

export default createHandleSagas(actionTypes.GET_AD, actions.adUpdate, getAd);
