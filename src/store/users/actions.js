import {v4 as uuidv4} from "uuid";

export const ADD_USER = 'ADD_USER';

export const addUser = ({firstname, lastname, email, password}) => {
    return {
        type: ADD_USER,
        payload: {
            id: uuidv4(),
            firstname,
            lastname,
            email,
            password,
        }
    }
}
