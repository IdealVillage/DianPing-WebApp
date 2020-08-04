import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { connectRouter,routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";

export const history=createBrowserHistory()

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const Middlewares = [routerMiddleware(history),logger, sagaMiddleware]


const storeEnhancers = composeWithDevTools(applyMiddleware(...Middlewares))

export default function configureStore(initialState = {}) {
    const store = createStore(connectRouter(history)(rootReducer), initialState, storeEnhancers)
    console.log(store.getState())
    sagaMiddleware.run(rootSaga)
    return store
}