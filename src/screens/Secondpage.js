import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
const { Navigation } = require('react-native-navigation');
​
// type Props = {};
​
​
class SecondPage extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    
   render() {
       return (
           <View style={styles.container}>
               <Text style={styles.welcome}>This is Second Page</Text>
               <Text style={styles.instructions}>Click This Button</Text>
               <Button title="Back" onPress={()=>{this._pop()}}/>
           </View>
      );
  }
​
   _pop=() =>{
       Navigation.pop(this.props.componentId);
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
module.exports=SecondPage;