import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {AuthReducer} from "./Reducers/AuthReducer";
import {UserReducer} from "./Reducers/UsersReducer";
import {ConversationReducer} from "./Reducers/ConversationReducer";
import {MessagesReducer} from "./Reducers/MessagesReducer";
const rootreducer = combineReducers({
    AuthReducer,
    UserReducer,
    ConversationReducer,
    MessagesReducer
});


const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)))

export default store