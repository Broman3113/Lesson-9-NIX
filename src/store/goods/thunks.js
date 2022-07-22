import {
    deleteGoodsFailure,
    deleteGoodsRequest,
    deleteGoodsSuccess, editGoodFailure, editGoodRequest, editGoodSuccess,
    fetchGoodsFailure,
    fetchGoodsRequest,
    fetchGoodsSuccess, postGoodsFailure, postGoodsRequest, postGoodsSuccess
} from "./actions";


const baseUrl = 'http://127.0.0.1:8080';

export const fetchItems = () => {
    return async (dispatch) => {
        dispatch(fetchGoodsRequest());
        fetch([baseUrl, "goods"].join("/"))
            .then(response => response.json())
            .then(data => dispatch(fetchGoodsSuccess(data.goods)))
            .catch(error => dispatch(fetchGoodsFailure(error)));
    }
}
export const deleteItem = (id) => {
    return async (dispatch) => {
        dispatch(deleteGoodsRequest(id));
        fetch([baseUrl, "goods", id].join("/"), {method: "DELETE"})
            .then(response => {
                if (response.status === 200) {
                    return dispatch(deleteGoodsSuccess(id))
                } else {
                    console.log("throwing error")
                    throw new Error("Error with status code " + response.status);
                }
            })
            .catch(error => dispatch(deleteGoodsFailure(id, error)));
    }
}

export const postGoods = (item) => {
    return async (dispatch) => {
        dispatch(postGoodsRequest());
        fetch([baseUrl, "goods"].join("/"),
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)})
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error("Error with status code " + response.status);
                }
            })
            .then(data => dispatch(postGoodsSuccess(data)))
            .catch(error => dispatch(postGoodsFailure(error)))
    }
}

export const editGood = (id, item) => {
    return async (dispatch) => {
        dispatch(editGoodRequest());
        fetch([baseUrl,"goods", id].join("/"), {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item)
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error("Error with status code " + response.status);
                }
            })
            .then(data => dispatch(editGoodSuccess(data)))
            .catch(error => dispatch(editGoodFailure(error)))
    }
}
