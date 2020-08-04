import { createHandleSagas, createReqSagas } from "../../utils/createSaga";
import { actionTypes, actions } from "../../ducks/photos";

export default createHandleSagas(
  actionTypes.GET_PHOTOS,
  actions.updatePhotos,
  createReqSagas()
);
