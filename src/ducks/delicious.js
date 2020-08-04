export const actionTypes = {
  GET_DELICIOUS_INFO: "GET_DELICIOUS_INFO",
  UPDATE_DELICIOUS_INFO: "UPDATE_DELICIOUS_INFO",
  SWITCh_NAV_BUTTON: "SWITCh_NAV_BUTTON",
  SWITCH_SECOND_NAV: "SWITCH_SECOND_NAV"
};

export const actions = {
  getDeliciousInfo: () => ({
    type: actionTypes.GET_DELICIOUS_INFO
  }),
  updateDeliciousInfo: data => ({
    type: actionTypes.UPDATE_DELICIOUS_INFO,
    data
  }),
  switchNavButton: curBtn => ({
    type: actionTypes.SWITCh_NAV_BUTTON,
    curBtn
  }),
  switchSecondNav: curNav => ({
    type: actionTypes.SWITCH_SECOND_NAV,
    curNav
  })
};

let initState = {
  curBtn: "",
  all: {
    curNav: "商区",
    business: {
      leftSelector: "热门商区",
      rightSelector: "全部商区",
      leftData: [],
      rightData: []
    },
    subway: {
      leftSelector: "",
      rightSelector: "",
      leftData: [],
      rightData: []
    }
  },
  delicious: {
    leftSelector: "美食",
    leftData: [],
    rightSelector: "全部美食",
    rightData: []
  },
  sort: {
    defaultSelected: "智能排序",
    sortArr: [
      "智能排序",
      "距离优先",
      "人气优先",
      "好评优先",
      "口味最佳",
      "环境最佳",
      "服务最佳",
      "低价优先",
      "高价优先"
    ]
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SWITCh_NAV_BUTTON:
      return { ...state, curBtn: action.curBtn };
    case actionTypes.SWITCH_SECOND_NAV:
      return { ...state, all: { ...state.all, curNav: action.curNav } };
    case actionTypes.UPDATE_DELICIOUS_INFO:
      return {
        ...state,
        all: {
          ...state.all,
          business: {
            ...state.all.business,
            leftData: data.area,
            rightData: data.commonStreet
          },
          subway:{
              ...state.all.subway,
              
          }
        },

      };
    default:
      return state;
  }
};
