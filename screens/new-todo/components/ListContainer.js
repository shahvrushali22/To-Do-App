import React, { Component } from 'react';

import { FlatList } from 'react-native';
import TodoItem from "./TodoItem";

export default class  extends Component {
  render() {
    return (
      <FlatList
          data={this.props.items}
          style={{flex:1}}
          keyExtractor={(data) => data.key + ""}
          renderItem={({item}) => <TodoItem checkItem={(key) => this.props.checkItem(key)} item={item}/>}
      />
    );
  }
}