import {
    ADD_ITEM_ACTION,
    CHECK_TODO_ITEM_ACTION,
    GET_PENDING_ITEMS_ACTION,
    ON_MESSAGE_CHANGE_ACTION,
} from "../action-types";

const INITIAL_STATE={
  items:[],
  pendingItems:[],
  messageText:"",
};

const TodoReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case CHECK_TODO_ITEM_ACTION:
            let key=action.data;
            let updatedItems=state.pendingItems.filter((item) => key !== item.key);
            return {...state,pendingItems: updatedItems};
        case GET_PENDING_ITEMS_ACTION:
            let pendingItems=state.items.filter((item) => !item.isChecked);
            return {...state,pendingItems:pendingItems};
        case ON_MESSAGE_CHANGE_ACTION:
            let text = action.data;
            return {...state,messageText: text};
        case ADD_ITEM_ACTION:
            let todoItem={
                isChecked:false,
                message: state.messageText,
                key: state.messageText,
            };
            let updateList = state.items;
            updateList.push(todoItem);
            return {...state,items: updateList,messageText:"",pendingItems:[]};

        default:
            //For SecureStore jabh app band karke vapis chalu karte toh data rehna chahye

            // let items=await Expo.SecureStore.getItemsAsync("list");
            // if(typeof items !== "undefined"){
            //     items = JSON.parse(items);
            // }
            // return {...state,items:items};
            return state;
    }
};
export default TodoReducer;