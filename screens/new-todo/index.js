import {connect} from "react-redux";

import NewTodoComponent from "./new-todo.component";
import {addItem,onMessageChange} from "./new-todo.actions";

const mapStateToProps=(state)=>({
    messageText: state.TodoReducer.messageText
});

const mapDispatchToProps=(dispatch) =>({
    onMessageChange: (text) => dispatch(onMessageChange(text)),
    addItem: () => dispatch(addItem()),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoComponent)
