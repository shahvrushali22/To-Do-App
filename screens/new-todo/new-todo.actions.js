import {ADD_ITEM_ACTION,ON_MESSAGE_CHANGE_ACTION} from "../../action-types";

export const onMessageChange=(text)=>({
    type: ON_MESSAGE_CHANGE_ACTION,
    data:text,
});

export const addItem=() =>({
    type: ADD_ITEM_ACTION,
});