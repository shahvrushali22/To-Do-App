import {CHECK_TODO_ITEM_ACTION,GET_PENDING_ITEMS_ACTION} from "../../action-types";
export const fetchPendingItems=()=> ({
    type: GET_PENDING_ITEMS_ACTION,
});

export const checkItem = (key) => ({
    type: CHECK_TODO_ITEM_ACTION,
    data: key,
});