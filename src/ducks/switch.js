export const actionTypes = {
  SWITCH_TO_SECOND: "SWITCH_TO_SECOND",
  SWITCH_TO_MAIN: "SWITCH_TO_MAIN"
};

export const actions = {
  switchToSecond: () => ({
    type: actionTypes.SWITCH_TO_SECOND
  }),
  switchTOMain: () => ({
    type: actionTypes.SWITCH_TO_MAIN
  })
};

export default function(state = "main", action) {
  switch (action.type) {
    case actionTypes.SWITCH_TO_SECOND:
      return "second";
    case actionTypes.SWITCH_TO_MAIN:
      return "main";
    default:
      return state;
  }
}


