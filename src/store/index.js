import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./user/reducer";
import {usersReducer} from "./users/reducer";
import {goodsReducer} from "./goods/reducer";

import {logger} from "./middleWares/logger";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    goods: goodsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
