import React, { Component } from 'react';

import { View ,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {ACCENT_COLOR, WHITE_COLOR} from "../colors";
import {responsiveHeight,responsiveFontSize,responsiveWidth} from "react-native-responsive-dimensions";

export default class Button extends Component {
  render() {
    return (
        <TouchableOpacity style={[styles.buttonContainer,this.props.styles]} onPress={() => this.props.onPress()}>
            <Text style={styles.textContainer}>{this.props.title}</Text>
        </TouchableOpacity>
    );
  }
  
 
}

Button.defaultProps={
    styles:{}
};


const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:ACCENT_COLOR,
        paddingVertical:responsiveHeight(2),
        //Default value nai dena tha iselye yaha se comment kiya and the button ko styles pass kar rahe hai
        // marginVertical:responsiveHeight(1),
        // marginHorizontal:responsiveWidth(8),
    },
    textContainer:{
        color:WHITE_COLOR,
        fontSize:responsiveFontSize(2.5)
    }
});

