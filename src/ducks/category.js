export const actionTypes={
    GET_CATEGORY:'GET_CATEGORY',
    UPDATE_CATEGORY:'UPDATE_CATEGORY'
}


export const actions={
    getCategory:url=>({
        type:actionTypes.GET_CATEGORY,
        url
    }),
    updateCategory:data=>{
        type:actionTypes.UPDATE_CATEGORY,
        data
    }
}

export default function(state=[],action) {
    switch (action.type) {
        case actionTypes.UPDATE_CATEGORY:
            return action.data    
        default:
            return state
    }
}