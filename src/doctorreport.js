import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View,TouchableHighlight,Alert,StyleSheet } from 'react-native';


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
      <View style={{padding: 80}} ref='form'>
        <TextInput
          style={{height: 40, fontSize: 20}}
          placeholder='Location'
          onChangeText={(location) => this.setState({location})}
          onFocus={()=>this.setState({button:'Submit'})}
          value={this.state.location}
        />
        <TextInput
          style={{height: 40, fontSize: 20}}
          placeholder="Name of the Disease"
          onChangeText={(diesease) => this.setState({diesease})}
          onFocus={()=>this.setState({button:'Submit'})}
          value={this.state.diesease}
        />
        <TouchableHighlight style = {styles.Submit} onPress={this._submitForm}>
          <Text style={{fontSize: 18}}>{this.state.button}</Text>
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

styles = StyleSheet.create ({
  Submit: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },

  textBox: {
    
  }
});
