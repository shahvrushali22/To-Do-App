import React, { Component } from 'react';

import { View ,Text,StyleSheet} from 'react-native';
import CheckBox from "../../../components/CheckBox";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {WHITE_COLOR} from "../../../colors";

export default class  TodoItem extends Component {
  render() {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    containeStyles={styles.checkbox}
                    isChecked={this.props.item.isChecked}
                    onValueChange={(status) => this.onCheck(status)}
                />

            </View>
            <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.messageStyles}>{this.props.item.message}</Text>
        </View>
    );
  }

  onCheck(status){
      if(status){
          setInterval(() => this.props.checkItem(this.props.item.key), 500);
      }
  }
}

const styles = StyleSheet.create({
    itemContainer:{
        alignSelf:"stretch",
        marginHorizontal: responsiveWidth(6),
        marginVertical: responsiveHeight(1),
        backgroundColor: WHITE_COLOR,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:responsiveWidth(2),
    },

    checkboxContainer:{
        padding:responsiveWidth(5),
    },
    checkbox:{

        width:responsiveWidth(10),
        height:responsiveWidth(10),
    },
    messageStyles:{
        fontSize: responsiveFontSize(2.25),
        flex:1,
        paddingRight: responsiveWidth(5),
    }
});