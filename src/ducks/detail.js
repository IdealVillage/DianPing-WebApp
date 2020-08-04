export const actionTypes = {
  GET_DESTINATION: "GET_DESTINATION",
  UPDATE_DESTINATION: "UPDATE_DESTINATION",
  GET_RECOMMEND: "GET_RECOMMEND",
  UPDATE_RECOMMEND: "UPDATE_RECOMMEND"
};

export const actions = {
  getDestination: url => ({
    type: actionTypes.GET_DESTINATION,
    url
  }),
  getRecommend: request => ({
    type: actionTypes.GET_RECOMMEND,
    request
  }),
  updateDestination: data => ({
    type: actionTypes.UPDATE_DESTINATION,
    data
  }),
  updateRecommend: data => ({
    type: actionTypes.UPDATE_RECOMMEND,
    data
  })
};

const initState = {
  destination: [],
  recommend: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DESTINATION:
      return {
        ...state,
        destination: action.data
      };
    case actionTypes.UPDATE_RECOMMEND:
      return {
        ...state,
        recommend: action.data
      };
    default:
      return state;
  }
};
