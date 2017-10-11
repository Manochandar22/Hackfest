import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'


export  class DataFeed extends Component {
 constructor(props) {
    super(props);
    this.state = {
    feedlist:[],
    isLoading:true
  }	
}
  render () {
    if(this.state.isLoading)
    {
    return( 	
	    <View style={styles.container}>
	        <ActivityIndicator
	          animating={true}
	          color="white"
	          size="large"
	          style={{margin: 15}}
	        />

	        <Text>Loading!</Text>
	      </View>
      );
    }
    else{
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.feedlist.map((item)=>(
           <Card key={item._id}>
              <CardTitle title={item.title} subtitle={item.category}/>
              <CardContent text={item.content}/>
              <CardAction seperator={true} inColumn={true}>
              </CardAction>
            </Card>  
            ))}
        </View>
      </ScrollView>
    );
    }
    
  }
componentDidMount(){

	fetch('http://192.168.43.28:8000/health', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          /*body: JSON.stringify({
            doctor:'asad',
            location: location,
            diesease: diesease,
          })*/
        }).then((response) => response.json())
          .then((responseJson) => {
           this.setState({feedlist:responseJson,isLoading:!this.state.isLoading});
           console.log(this.state.feedlist);
          })
          .catch((error) => {
          	console.log(error);
            // Alert.alert(
            //   'Error',
            //   'page failed to load',
            //   [
            //     {text:'ok', onPress:()=>{}}
            //   ],

            //   );
          });
  };
	
 }


list = [
  {
    id: 1,
    title: "blue",
    category: "text1",
    content:"sfjn"
  },
  {
    id: 2,
    title: "red",
    category: "text2",
    content:"sdjnfsfd"
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 60
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  card: {
    width: 300
  }
});
