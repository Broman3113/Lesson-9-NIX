export const FETCH_GOODS_REQUEST = 'FETCH_GOODS_REQUEST';
export const FETCH_GOODS_SUCCESS = 'FETCH_GOODS_SUCCESS';
export const FETCH_GOODS_FAILURE = 'FETCH_GOODS_FAILURE';
export const DELETE_GOODS_REQUEST = 'DELETE_GOODS_REQUEST';
export const DELETE_GOODS_SUCCESS = 'DELETE_GOODS_SUCCESS';
export const DELETE_GOODS_FAILURE = 'DELETE_GOODS_FAILURE';
export const POST_GOODS_REQUEST = 'POST_GOODS_REQUEST';
export const POST_GOODS_SUCCESS = 'POST_GOODS_SUCCESS';
export const POST_GOODS_FAILURE = 'POST_GOODS_FAILURE';
export const RESET_IS_ADDING_ITEM_SUCCESS = 'RESET_IS_ADDING_ITEM_SUCCESS';
export const SET_SHOULD_FETCH = 'SET_SHOULD_FETCH';
export const EDIT_GOOD_REQUEST = 'EDIT_GOOD_REQUEST';
export const EDIT_GOOD_SUCCESS = 'EDIT_GOOD_SUCCESS';
export const EDIT_GOOD_FAILURE = 'EDIT_GOOD_FAILURE';
export const RESET_IS_EDITING_ITEM_SUCCESS = 'RESET_IS_EDITING_ITEM_SUCCESS';
export const RESET_EDITING_ITEM_ERROR = 'RESET_EDITING_ITEM_ERROR';

export const fetchGoodsRequest = () => {
    return {
        type: FETCH_GOODS_REQUEST
    }
}
export const fetchGoodsSuccess = (goods) => {
    return {
        type: FETCH_GOODS_SUCCESS,
        items: goods
    }
}
export const fetchGoodsFailure = (error) => {
    return {
        type: FETCH_GOODS_FAILURE,
        error
    }
}

export const deleteGoodsRequest = (id) => {
    return {
        type: DELETE_GOODS_REQUEST,
        id
    }
}
export const deleteGoodsSuccess = (id) => {
    return {
        type: DELETE_GOODS_SUCCESS,
        id
    }
}
export const deleteGoodsFailure = (id, error) => {
    return {
        type: DELETE_GOODS_FAILURE,
        id,
        error
    }
}

export const postGoodsRequest = () => {
    return {
        type: POST_GOODS_REQUEST,
    }
}
export const postGoodsSuccess = (item) => {
    return {
        type: POST_GOODS_SUCCESS,
        item
    }
}
export const postGoodsFailure = (error) => {
    return {
        type: POST_GOODS_FAILURE,
        error
    }
}
export const resetIsAddingItemSuccess = () => {
    return {
        type: RESET_IS_ADDING_ITEM_SUCCESS,
    }
}

export const setShouldFetch = (value) => {
    return {
        type: SET_SHOULD_FETCH,
        payload: value
    }
}

export const editGoodRequest = () => {
    return {
        type: EDIT_GOOD_REQUEST,
    }
}
export const editGoodSuccess = (item) => {
    return {
        type: EDIT_GOOD_SUCCESS,
        item
    }
}
export const editGoodFailure = (error) => {
    return {
        type: EDIT_GOOD_FAILURE,
        error
    }
}
export const resetIsEditingItemSuccess = () => {
    return {
        type: RESET_IS_EDITING_ITEM_SUCCESS,
    }
}
export const resetEditingItemError = () => {
    return {
        type: RESET_EDITING_ITEM_ERROR
    }
}
