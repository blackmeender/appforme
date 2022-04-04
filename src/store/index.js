import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import messagesReducer from "./messages/reducer"
import chatsReducer from "./chats/reducer"
import profileReducer from "./profile/reducer"
import middleware from "./middleware"
import thunk from "redux-thunk"
// import createSagaMiddleware from "@redux-saga/core"
// import mySaga from "./sagas"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import gistsReducer from "./gists/reducer"


const reducers = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
    gists: gistsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
// const sagaMiddleWare = createSagaMiddleware()
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

// sagaMiddleWare.run(mySaga)



export const persistor = persistStore(store)

export default store