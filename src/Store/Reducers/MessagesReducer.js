const initstate = {
    Messages:[],
    MessagesLoding:false,
}


export const MessagesReducer = (state = initstate,action) => {
    switch(action.type) {
        case "SET_MESSAGES":
            return {...state,Messages:action.paylod}
        case "ADD_MESSAGE":
            return {...state,Messages:[...state.Messages , action.paylod]}
        case "SET_MESSAGES_LODING":
            return {...state,MessagesLoding:true}
        case "CLOSE_MESSAGES_LODING":
            return {...state,MessagesLoding:false}
        case "ADD_ONE_MESSAGE":
          
            return {...state,Messages:[...state.Messages ,action.paylod]}
        default:
            return state
    }
}