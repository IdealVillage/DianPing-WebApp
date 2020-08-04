export const actionTypes = {
  GET_COMMENT: "GET_COMMENT",
  UPDATE_COMMENT: "UPDATE_COMMENT",
  GET_GROUP_INFO: "GET_GROUP_INFO",
  UPDATE_GROUP_INFO: "UPDATE_GROUP_INFO",
  GET_RECOMMEND: "SHOP/GET_RECOMMEND",
  UPDATE_RECOMMEND: "SHOP/UPDATE_RECOMMEND",
  GET_AD: "SHOP/GET_AD",
  UPDATE_AD: "SHOP/UPDATE_AD",
  GET_RELATION: "GET_RELATION",
  UPDATE_RELATION: "UPDATE_RELATION"
};

export const actions = {
  getComment: url => ({
    type: actionTypes.GET_COMMENT,
    url
  }),
  updateComment: data => ({
    type: actionTypes.UPDATE_COMMENT,
    data
  }),
  getGroupInfo: url => ({
    type: actionTypes.GET_GROUP_INFO,
    url
  }),
  updateGroupInfo: data => ({
    type: actionTypes.UPDATE_GROUP_INFO,
    data
  }),
  getRecommend: url => ({
    type: actionTypes.GET_RECOMMEND,
    url
  }),
  updateRecommend: data => ({
    type: actionTypes.UPDATE_RECOMMEND,
    data
  }),
  getAd: url => ({
    type: actionTypes.GET_AD,
    url
  }),
  updateAd: data => ({
    type: actionTypes.UPDATE_AD,
    data
  }),
  getRelation: url => ({
    type: actionTypes.GET_RELATION,
    url
  }),
  updateRelation: data => ({
    type: actionTypes.UPDATE_RELATION,
    data
  })
};

export default (state = { comments: [] }, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COMMENT:
      return {
        ...state,
        comments: action.data
      };
    case actionTypes.UPDATE_GROUP_INFO:
      return {
        ...state,
        groupInfos: action.data
      };
    case actionTypes.UPDATE_RECOMMEND:
      return {
        ...state,
        recommend: action.data
      };
    case actionTypes.UPDATE_AD:
      return {
        ...state,
        ads: action.data
      };
    case actionTypes.UPDATE_RELATION:
      return {
        ...state,
        relation: action.data
      };
    default:
      return state;
  }
};
