import { actionTypes,actions } from "../../ducks/search";
import { createHandleSagas, createReqSagas } from "../../utils/createSaga";

const getSearchIntro = createReqSagas();

export default createHandleSagas(
  actionTypes.GET_SEARCH_INTRO,
  actions.searchIntroUpdate,
  getSearchIntro
);
