const { Navigation } = require('react-native-navigation');
const WelcomeScreen = require('./Welcomepage');
const SecondScreen= require('./Secondpage')
​
​
function registerScreens() {
   Navigation.registerComponent('navigation.test.welcome', ()=>WelcomeScreen);
   Navigation.registerComponent('navigation.test.second',()=>SecondScreen);
​
}
​
​
module.exports= {registerScreens};
