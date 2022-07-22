import {SET_IS_AUTH, SET_USER_INFO} from "./actions";

const initialState = {
    userInfo: {
        firstname: "Placeholder",
        lastname: "Placeholder",
        email: "Placeholder",
        password: "Placeholder",
    },
    isAuth: true,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state, userInfo: action.payload}
        case SET_IS_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state;
    }
}
