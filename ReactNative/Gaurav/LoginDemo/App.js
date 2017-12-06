import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet } from 'react-native';

import LoginComponent from './components/LoginComponent/LoginComponent'

export default class myapp extends Component {
  render() {
    return (
      <View>
        <LoginComponent />
      </View>
    )
  }
}

AppRegistry.registerComponent('myapp', () => myapp)
