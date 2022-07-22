import React, {useState} from 'react';
import {Button, CircularProgress, TextField} from "@mui/material";
import {postGoods} from "../store/goods/thunks";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {selectAddingItemError, selectIsAddingItem, selectIsAddingItemSuccess} from "../store/goods/selectors";
import {resetIsAddingItemSuccess, setShouldFetch} from "../store/goods/actions";

const styles = {
    inputWrapper: {
        margin: "20px auto"
    },
    submit: {
        background: "#005d5d"
    }
}

const AddGoods = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const isAddingItem = useSelector(selectIsAddingItem);
    const isAddingItemSuccess = useSelector(selectIsAddingItemSuccess);
    const addingItemError=useSelector(selectAddingItemError);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onAddItem = () => {
        dispatch(postGoods(
            {
                title: title,
                description: description,
                weight: "1",
                category: ""
            }
        ));
    }
    if (addingItemError) {
        console.error(addingItemError);
        return (
            <div>
                Something went wrong, check console for more information
            </div>
        )
    }
    if (isAddingItem) {
        return (
            <div>
                <CircularProgress/>
            </div>
        )
    }
    if (isAddingItemSuccess) {
        setTimeout(() => {
            dispatch(resetIsAddingItemSuccess());
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
            <h2>Add new note</h2>
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
            <Button variant="contained" style={styles.submit} onClick={onAddItem}>Submit</Button>
        </div>
    );
};

export default AddGoods;
