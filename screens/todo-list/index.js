import React, { Component } from 'react';

import { connect } from 'react-redux';
import {checkItem,fetchPendingItems} from "./todo-list.actions";
import  TodoListComponent from "./todo-list.component";


const mapStateToProps = (state) => ({
    items: state.TodoReducer.items,
    pendingItems: state.TodoReducer.pendingItems
});

const mapDispatchToProps = (dispatch) => ({
    fetchPendingItems: () => dispatch(fetchPendingItems()),
    checkItem: (key) => dispatch(checkItem(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);