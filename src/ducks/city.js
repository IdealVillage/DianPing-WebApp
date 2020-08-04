export const actionTypes = {
  GET_HOT_CITY: "GET_HOT_CITY",
  UPDATE_HOT_CITY: "UPDATE_HOT_CITY",
  CHANGE_CITY:"CHANGE_CITY"
};

export const actions = {
    getHotCity:url=>({
        type:actionTypes.GET_HOT_CITY,
        url
    }),
    updateHotCity:data=>({
        type:actionTypes.UPDATE_HOT_CITY,
        data
    }),
    changeCity:cityName=>({
        type:actionTypes.CHANGE_CITY,
        cityName
    })
};


export default (state=[],action)=>{
    switch (action.type) {
        case actionTypes.UPDATE_HOT_CITY:
            return action.data    
        default:
            return state
    }
}

