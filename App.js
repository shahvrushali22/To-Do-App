import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from "react-native-router-flux";
import TodoListScreen from "./screens/todo-list";
import NewTodoScreen from "./screens/new-todo";
import {connect, Provider} from "react-redux";


import RootReducer from "./reducers/root-reducer";
import {createStore} from "redux";
import {responsiveHeight} from "react-native-responsive-dimensions";
import {PRIMARY_COLOR} from "./colors";

const RouterWithRedux = connect()(Router);
const store = createStore(RootReducer);
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <RouterWithRedux>
                        <Scene key="root" hideNavBar={true}>
                            <Scene key="todoList" component={TodoListScreen}/>
                            <Scene key="newTodo" component={NewTodoScreen}/>
                        </Scene>
                    </RouterWithRedux>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        paddingTop: responsiveHeight(5),
        paddingBottom: responsiveHeight(4),
    },
});
