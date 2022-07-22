import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    selectAreItemsLoading,
    selectEditingItemError,
    selectGoods,
    selectGoodsError, selectIsEditingItem, selectIsEditingItemSuccess,
    selectShouldFetch
} from "../store/goods/selectors";
import {Button, CircularProgress, TextField} from "@mui/material";
import {editGood, fetchItems} from "../store/goods/thunks";
import {
    editGoodFailure, resetEditingItemError,
    resetIsEditingItemSuccess,
    setShouldFetch
} from "../store/goods/actions";


const styles = {
    inputWrapper: {
        margin: "20px auto"
    },
    submit: {
        background: "#005d5d"
    }
}

const EditGoods = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const goods = useSelector(selectGoods);
    const areItemsLoading = useSelector(selectAreItemsLoading);
    const goodsError = useSelector(selectGoodsError);

    const shouldFetch = useSelector(selectShouldFetch);

    const editingItemError = useSelector(selectEditingItemError);
    const isEditingItem = useSelector(selectIsEditingItem);
    const isEditingItemSuccess = useSelector(selectIsEditingItemSuccess);

    const {itemId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onGoBack = (e) => {
        e.preventDefault();
        navigate("/");
        dispatch(resetEditingItemError());
    }

    useEffect(() => {
        if (shouldFetch) {
            dispatch(fetchItems());
            dispatch(setShouldFetch(false))
        }
    }, [])
    useEffect(() => {
        const item = goods.length ? goods.filter(item => item.id === itemId)[0] : {title: "", description: "",};

        if (item) {
            setTitle(item.title || "")
            setDescription(item.description || "")
        } else {
            const error = new Error("Can't find item with such id");
            dispatch(editGoodFailure(error));
        }
        console.log(item);
    }, [goods])

    console.log(itemId);
    const onEditItem = () => {
        dispatch(editGood(
            itemId,
            {
                title: title,
                description: description,
                weight: "1",
                category: ""
            }
        ));
    }
    if (areItemsLoading || isEditingItem) {
        return (
            <div>
                <h2>Edit Note</h2>

                <CircularProgress/>
            </div>
        )
    }
    if (goodsError || editingItemError) {
        console.log(goodsError || editingItemError)
        return (
            <div>
                <h2>Edit Note</h2>

                Something went wrong, check console for more information
                <a href="" onClick={onGoBack}>Go back</a>
            </div>
        )
    }
    if (isEditingItemSuccess) {
        setTimeout(() => {
            dispatch(resetIsEditingItemSuccess());
            dispatch(setShouldFetch(false));
            navigate('/');
        }, 1000);
        return (
            <div>
                Succcess
            </div>
        )
    }
    return (
        <div>
            <h2>Edit Note</h2>
            <div style={styles.inputWrapper}>
                <TextField label="Title"
                           variant="standard"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div style={styles.inputWrapper}>
                <TextField label="Description"
                           variant="standard"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <Button variant="contained" style={styles.submit} onClick={onEditItem}>Submit</Button>
        </div>
    );
};

export default EditGoods;
