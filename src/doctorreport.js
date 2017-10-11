import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View,TouchableHighlight,Alert } from 'react-native';


export class DoctorReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    diesease: '',
    location: '',
    resp:'',
    button:'Submit',
  }
    this._submitForm=this._submitForm.bind(this);
  }
render() {
    return (
      <View style={{padding: 10}} ref='form'>
        <TextInput
          style={{height: 40}}
          placeholder='location'
          onChangeText={(location) => this.setState({location})}
          onFocus={()=>this.setState({button:'Submit'})}
          value={this.state.location}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Name of the diesease"
          onChangeText={(diesease) => this.setState({diesease})}
          onFocus={()=>this.setState({button:'Submit'})}
          value={this.state.diesease}
        />
        <TouchableHighlight onPress={this._submitForm}>
          <Text>{this.state.button}</Text>
        </TouchableHighlight>
        <Text>{this.state.resp}</Text>
      </View>
    );
}
_submitForm = () => {
    const { diesease, location } = this.state

    fetch('http://localhost:8000/json', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            doctor:'asad',
            location: location,
            diesease: diesease,
          })
        }).then((response) => response.text())
          .then((text) => {
           this.setState({button:'Submitted',diesease:'',location:''});
          })
          .catch((error) => {
            Alert.alert(
              'Error',
              'Submission unsuccesfull',
              [
                {text:'Try again', onPress:()=>this.setState({button:'Try again'})}
              ],

              );
          });
  };
}