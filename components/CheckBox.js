import React, { Component } from 'react';

import { View ,TouchableWithoutFeedback} from 'react-native';
import Lottie from "lottie-react-native";
export default class CheckBox extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.animation.play(0,1);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onValueChange.bind(this)}>
        <Lottie style={this.props.containerStyles}
                loop={false}
                ref={animation => this.animation = animation}
                source={require("../assets/animation/check.json")}/>
      </TouchableWithoutFeedback>
    );
  }

  onValueChange(){
    let isChecked = !this.props.isChecked;
    if(isChecked){
      this.animation.play(14,25);
    }else {
      this.animation.play(0,1);
    }

    this.props.onValueChange(isChecked);
  }
}

CheckBox.defaultProps={
  containerStyles:{
    flex:1,
  },

  isChecked: false
};