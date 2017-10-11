
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from './src/login';
import {DoctorReport} from './src/doctorreport';
import {DataFeed} from './src/feed';


export default class App extends React.Component {
  render() {
    return (
       
          <DataFeed />
        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
