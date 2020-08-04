class AutoRedux {
  constructor(actionTyes, initState) {
    this._actionTyes = {};
    this._actions = {};
    this._updateActionTypes = [];
    this._reducer = null;
    this._initState = initState;
    this.createActionTypes(actionTyes);
  }
  createActionTypes(actionTypes) {
    if (!Array.isArray(actionTypes) || !actionTypes.length) {
      throw new TypeError(`actionTypes must be a Array,and can't be empty`);
    }
    actionTypes.map((item, i) => {
      let upper = item.toUpperCase();
      this._actionTyes[`GET_${upper}`] = "GET_" + upper;
      this._actionTyes[`UPDATE_${upper}`] = "UPDATE_" + upper;
    });
    this.createActions();
    this.createReducer();
  }
  createActions() {
    Object.keys(this._actionTyes).map((item, i) => {
      let key = item.toLowerCase().split("_");
      let key_join = key[0] + key[1].charAt(0).toUpperCase() + key[1].slice(1);
      if (key[0] === "update") {
        this._actions[key_join] = data => ({
          type: item,
          data
        });
        this._updateActionTypes.push(key_join);
      } else if (key[0] === "get") {
        this._actions[key_join] = url => ({
          type: item,
          url
        });
      } else {
        throw new Error("Unexpected actionTypes");
      }
    });
  }
  createReducer() {
    this._reducer = (state = this._initState || {}, action) => {
      switch (action.type) {
        case this._updateActionTypes[action.type]:
          return {
            ...state,
            [this._updateActionTypes[action.type]]: action.data
          };
        default:
          return state;
      }
    };
  }
  getData() {
    return {
      actionTypes: this._actionTyes,
      actions: this._actions,
      reducer: this._reducer
    };
  }
}

export default AutoRedux