import { actionTypes, actions } from "../../ducks/home";
import { createHandleSagas,createReqSagas } from "../../utils/createSaga";

const getLocation = createReqSagas();

export default createHandleSagas(
  actionTypes.GET_USER_LOCATION,
  actions.userInfoUpdate,
  getLocation
);
