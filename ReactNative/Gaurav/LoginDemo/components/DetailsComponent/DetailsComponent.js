import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet } from 'react-native';

import LoginComponent from '../LoginComponent/LoginComponent'

export default class DetailsComponent extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.input}>
          UserName:
         </Text>

        <Text style={styles.input}>
          Phone Number:
         </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 75
  },
  input: {
    marginTop: 5
  }
})

AppRegistry.registerComponent('DetailsComponent', () => DetailsComponent)
