export const SET_IS_AUTH = 'SET_IS_AUTH';
export const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfo = ({firstname, lastname, email, password}) => {
    return {
        type: SET_USER_INFO,
        payload: {firstname, lastname, email, password}
    }
}
export const setIsAuth = (value) => {
    return {
        type: SET_IS_AUTH,
        payload: value
    }
}
