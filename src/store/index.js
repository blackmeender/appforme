import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import messagesReducer from "./messages/reducer"
import chatsReducer from "./chats/reducer"
import profileReducer from "./profile/reducer"
import middleware from "./middleware"

const reducers = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(middleware))
)

export default store