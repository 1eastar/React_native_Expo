import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
const { Navigation } = require('react-native-navigation');
​
class WelcomePage extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

   render() {
       return (
           <View style={styles.container}>
               <Text style={styles.welcome}>Welcome to React Native!</Text>
               <Text style={styles.instructions}>Click This Button</Text>
               <Button title="Click" onPress={()=>{this._push()}}/>
           </View>
      );
  }
​
   _push=()=>{
           Navigation.push(this.props.componentId, {
               component: {
                   name: 'navigation.test.second',
                   passProps: {
                       text: 'SecondScreen'
                  },
                   options: {
                       topBar: {
                           title: {
                               text: 'SecondScreen'
                          }
                      }
                  }
              }
          });
  }
}
​
const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
  },
   welcome: {
       fontSize: 20,
       textAlign: 'center',
       margin: 10,
  },
   instructions: {
       textAlign: 'center',
       color: '#333333',
       marginBottom: 5,
  },
});
​
module.exports= WelcomePage;