import { combineReducers, createStore } from "redux";
import gameReducer from "./reducers/gameReducer";

const rootRedux = combineReducers({
    gameReducer
});

export const store = createStore(rootRedux,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());