import { actionTypes, actions } from "../../ducks/home";
import { createHandleSagas, createReqSagas } from "../../utils/createSaga";

const getGuessULike = createReqSagas();

export default createHandleSagas(
  actionTypes.GET_GUESS_U_LIKE,
  actions.guessULikeUpdate,
  getGuessULike
);
