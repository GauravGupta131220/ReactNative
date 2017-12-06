import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


import DetailsComponent from '../DetailsComponent/DetailsComponent'

export default class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            emailValue: '',
            phoneNumber: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    value={this.state.emailValue}
                    onChangeText={(emailValue) => this.setState({
                        emailValue: emailValue
                    })}>

                </TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="enter your password"
                    secureTextEntry>

                </TextInput>

                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={10}
                    placeholder="enter your phone number"
                    value={this.state.phoneNumber}
                    onChangeText={(phoneNumber) => this.setState({
                        phoneNumber: phoneNumber
                    })}>

                </TextInput>

                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => Actions.DetailsComponent({ isEmailValue: this.state.emailValue })}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 75,
    },
    input: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        backgroundColor: '#e3e3e3',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#87ceeb',
        height: 40,
        marginLeft: 10,
        marginRight: 10,

    },
    buttonText: {
        textAlign: 'center',
        paddingVertical: 10
    }

})
AppRegistry.registerComponent('LoginComponent', () => LoginComponent)
