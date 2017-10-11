import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View,TouchableHighlight } from 'react-native';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    username: '',
    password: '',
  }
  }
render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="username"
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={{height: 40}}
          ref={ref => (this.passwordInput = ref)}
          placeholder="password"
          onChangeText={(password) => this.setState({password})}
        />
        <TouchableHighlight onPress={this._submitForm}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
}
_submitForm = () => {
    const { username, password } = this.state

    fetch('http://localhost:8000/json', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Uname: username,
            Pword: password,
          })
        })
  };
}