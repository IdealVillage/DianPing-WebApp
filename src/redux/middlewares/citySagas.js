import { actionTypes, actions } from "../../ducks/city";
import { createHandleSagas, createReqSagas } from "../../utils/createSaga";

const getHotCity = createReqSagas();

export default createHandleSagas(
  actionTypes.GET_HOT_CITY,
  actions.updateHotCity,
  getHotCity
);
