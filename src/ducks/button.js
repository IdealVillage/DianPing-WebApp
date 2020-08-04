export const actionTypes = {
  ADD: "ADD",
  SUBSTRACT: "SUBSTRACT",
  INPUT_UPDATE_NUM: "INPUT_UPDATE_NUM"
};

export const actions = {
  add: () => ({
    type: actionTypes.ADD
  }),
  substract: () => ({
    type: actionTypes.SUBSTRACT
  }),
  inputUpdateNum: num => ({
    type: actionTypes.INPUT_UPDATE_NUM,
    num
  })
};

export default (state = { num: 1 }, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        num: state.num + 1
      };
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        num: state.num - 1
      };
    case actionTypes.INPUT_UPDATE_NUM:
      return {
        ...state,
        num: action.num
      };
    default:
      return state;
  }
};
