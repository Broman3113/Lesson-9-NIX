import React, {useEffect} from 'react';
import CustomList from "../containers/CustomList";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, fetchItems} from "../store/goods/thunks";
import {
    selectAreItemsLoading,
    selectGoods,
    selectGoodsError,
    selectRemovingItems, selectRemovingItemsError, selectShouldFetch
} from "../store/goods/selectors";
import {CircularProgress} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {setShouldFetch} from "../store/goods/actions";

const styles = {
    textWrapper: {
        display: "flex",
        justifyContent: "space-around",
        textAlign: "left",
    },
}

const GetGoods = () => {
    const goods = useSelector(selectGoods);
    const areItemsLoading = useSelector(selectAreItemsLoading);
    const goodsError = useSelector(selectGoodsError);
    const removingItems = useSelector(selectRemovingItems);
    const removingItemsError = useSelector(selectRemovingItemsError);

    const shouldFetch = useSelector(selectShouldFetch);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if  (shouldFetch) {
            dispatch(fetchItems());
            dispatch(setShouldFetch(false))
        }
    }, []);


    const deleteGood = (id) => {
        dispatch(deleteItem(id));
    }
    const onEditGood = (id) => {
        navigate(`/editGood/${id}`);
    }

    if (areItemsLoading) {
        return (
            <div>
                <h2>Goods list</h2>

                <CircularProgress/>
            </div>
        )
    }
    if (goodsError) {
        console.log(goodsError);
        return (
            <div>
                <h2>Goods list</h2>

                Something went wrong, check console for more information
            </div>
        )
    }
    return (
        <div className="container">
            <h2>Goods list</h2>

            {goods.map(good => <CustomList
                key={good.id}
                deleteGood={deleteGood}
                id={good.id}
                isRemoving={removingItems[good.id]}
                removingItemsError={removingItemsError}
                onEditGood={onEditGood}
            >
                <div style={styles.textWrapper}>
                    <span style={{minWidth: "100px"}}>{good.title}</span>
                    <span style={{minWidth: "100px"}}>{good.description}</span>
                </div>
            </CustomList>)}
        </div>
    );
};

export default GetGoods;
