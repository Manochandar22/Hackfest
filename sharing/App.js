import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from './src/login';
import {DoctorReport} from './src/doctorreport';

export default class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>
          <DoctorReport />
        </View>
      
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
