import {v4 as uuidv4} from "uuid";
import {ADD_USER} from "./actions";

const initialState = {
    users: [
        {
            id: uuidv4(),
            firstname: 'John',
            lastname: 'Smith',
            email: 'john@smith.com',
            password: '123'
        }
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        default:
            return state
    }
}
