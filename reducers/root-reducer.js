import {combineReducers} from "redux";
import TodoReducer from "./todo-reducer";

const RootReducer = combineReducers({
    TodoReducer
});

export default RootReducer;

/*

CombineReducer andr kya karta haii
Store(State):{
    TodoReducer:{
        item: []
    }
    ReminderReducer:{
        reminders:[]
    }
}
 */
