import {
    FETCH_GOODS_REQUEST,
    FETCH_GOODS_SUCCESS,
    FETCH_GOODS_FAILURE,
    DELETE_GOODS_REQUEST,
    DELETE_GOODS_SUCCESS,
    DELETE_GOODS_FAILURE,
    POST_GOODS_REQUEST,
    POST_GOODS_SUCCESS,
    POST_GOODS_FAILURE,
    RESET_IS_ADDING_ITEM_SUCCESS,
    SET_SHOULD_FETCH,
    EDIT_GOOD_REQUEST,
    EDIT_GOOD_SUCCESS, EDIT_GOOD_FAILURE, RESET_IS_EDITING_ITEM_SUCCESS, RESET_EDITING_ITEM_ERROR
} from "./actions";

const initialState = {
    // For Getting Items
    items: [],
    areItemsLoading: false,
    error: null,

    // For Removing Items
    removingItems: {},
    removingItemsError: {},

    // For Adding Items
    isAddingItem: false,
    addingItemError: null,
    isAddingItemSuccess: null,

    shouldFetch: true,

    // For Editing Item
    isEditingItem: false,
    editingItemError: null,
    isEditingItemSuccess: null,
}

export const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GOODS_REQUEST:
            return {...state, areItemsLoading: true, error: null}
        case FETCH_GOODS_SUCCESS:
            return {...state, items: action.items, areItemsLoading: false}
        case FETCH_GOODS_FAILURE:
            return {...state, areItemsLoading: false, error: action.error}
        case DELETE_GOODS_REQUEST:
            return {
                ...state,
                removingItems: {
                    ...state.removingItems,
                    [action.id]: true,
                },
                removingItemsError: {
                    ...state.removingItemsError,
                    [action.id]: null,
                }
            }
        case DELETE_GOODS_SUCCESS:
            return {
                ...state,
                removingItems: {
                    ...state.removingItems,
                    [action.id]: false,
                },
                items : state.items.filter(item => item.id !== action.id)
            }
        case DELETE_GOODS_FAILURE:
            return {
                ...state,
                removingItems: {
                    ...state.removingItems,
                    [action.id]: false,
                },
                removingItemsError: {
                    [action.id] : action.error,
                }
            }
        case POST_GOODS_REQUEST:
            return {...state, isAddingItem: true, addingItemError: null}
        case POST_GOODS_SUCCESS:
            return {...state, items: [...state.items, action.item], isAddingItem: false, isAddingItemSuccess: true}
        case POST_GOODS_FAILURE:
            return {...state, addingItemError: action.error, isAddingItem: false}
        case RESET_IS_ADDING_ITEM_SUCCESS:
            return {...state, isAddingItemSuccess: null}
        case SET_SHOULD_FETCH:
            return {...state, shouldFetch: action.payload}
        case EDIT_GOOD_REQUEST:
            return {...state, isEditingItem: true, editingItemError: null}
        case EDIT_GOOD_SUCCESS:
            return {...state, items: [...state.items.filter(item => item.id !== action.item.id), action.item] ,isEditingItem: false, isEditingItemSuccess: true};
        case EDIT_GOOD_FAILURE:
            return {...state, editingItemError: action.error, isEditingItem: false}
        case RESET_IS_EDITING_ITEM_SUCCESS:
            return {...state, isEditingItemSuccess: null}
        case RESET_EDITING_ITEM_ERROR:
            return {...state, editingItemError: null}
        default:
            return state
    }
}
