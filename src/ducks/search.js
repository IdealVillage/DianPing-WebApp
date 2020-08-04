export const actionTypes = {
  GET_SEARCH_INTRO: "GET_SEARCH_INTRO",
  SEARCH_INTRO_UPDATE: "SEARCH_INTRO_UPDATE"
};

export const actions = {
    getSearchIcon:url=>({
        type:actionTypes.GET_SEARCH_INTRO,
        url
    }),
    searchIntroUpdate:data=>({
        type:actionTypes.SEARCH_INTRO_UPDATE,
        data
    })
};


const searchReducer=(state=[],action)=>{
    switch (action.type) {
        case actionTypes.SEARCH_INTRO_UPDATE:
            return action.data    
        default:
            return state
    }
}

export default searchReducer