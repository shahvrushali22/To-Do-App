import React, { Component } from 'react';

import { View ,StyleSheet} from 'react-native';
import Button from "../../components/Button";
import ListContainer from "../new-todo/components/ListContainer";
import {GlobalStyles} from "../../styles";
import {Actions} from "react-native-router-flux"
import {responsiveWidth} from "react-native-responsive-dimensions";
export default class  extends Component {
    componentWillMount() {
        this.props.fetchPendingItems();
    }

    render() {
    return (
      <View style={GlobalStyles.mainContainer}>
          <ListContainer
              checkItem={(key) => this.props.checkItem(key)}
              items={this.props.pendingItems}
          />
          <Button title={"ADD A ITEM"} onPress={() => Actions.newTodo()} styles={styles.buttonStyles}/>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    buttonStyles:{
        position:"absolute",
        bottom:0,
        left:responsiveWidth(5),
        width:responsiveWidth(90),
    }
});