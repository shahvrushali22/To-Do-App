import React, { Component } from 'react';

import {Text,StyleSheet,TextInput, View } from 'react-native';
import  Button from "../../components/Button";


import {GlobalStyles} from "../../styles";


import {Actions} from "react-native-router-flux";
import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";
import {ACCENT_COLOR, SUCCESS_COLOR} from "../../colors";

export default class NewTodoComponent extends Component {
  render() {
    return (
      <View style={GlobalStyles.mainContainer}>
          <View style={styles.container}>
              <View>
                  <Text style={styles.labelText}>
                      Message:
                  </Text>
                  <TextInput
                      placeholder={"Enter your todo message: "}
                      value={this.props.messageText}
                      onChangeText={(text) => this.props.onMessageChange(text)}
                      style={styles.textInput}
                  />
              </View>

              <View >
                  <Button
                      title={"CANCEL"}
                      styles={{marginBottom: responsiveHeight(3)}}
                      onPress={() => Actions.pop()}
                  />
                  <Button
                      title={"ADD ITEM"}
                      styles={{backgroundColor: SUCCESS_COLOR}}
                      onPress={() => {
                          this.props.addItem();
                          Actions.reset('todoList')
                      }}/>
              </View>
          </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        paddingHorizontal: responsiveHeight(8),
        paddingTop: responsiveHeight(5),
    },
    labelText:{
        fontSize: responsiveFontSize(3),
        color: ACCENT_COLOR,
        fontWeight: "600",
        marginBottom: responsiveHeight(1),
    },

    textInput:{
        fontSize: responsiveFontSize(3),
    }
});