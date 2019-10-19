const { Navigation } = require('react-native-navigation');
const { registerScreens } = require('./src/screens');
​
function start(){
 registerScreens();
   Navigation.setRoot({
       root: {
           stack: {
               id: 'TEST',
               children: [
                  {
                       component: {
                           name: 'navigation.test.welcome'
                      }
                  }
              ]
          }
      }
  });
}
​
// module.exports={
//  start
// };
start();