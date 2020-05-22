import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
// import  HomeScreen  from "./screens/HomeScreen";
// import  StartScreen from "./screens/StartScreen";
// import  stackNavigator from "./components/stackNavigator";
import  MyDrawer from "./components/drawerNavigator";
// import {Ionicons} from '@expo/vector-icons';


// const Stack = createStackNavigator();


// const drawer1 = () =>{   
//   return (
//     <View style={styles.container}>
//       <Text>Drawer 1</Text>
//     </View>
//   );
// }

// const drawer2 = () =>{   
// return (
//   <View style={styles.container}>
//     <Text>Drawer 2</Text>
//   </View>
// );
// }
 

class App extends React.Component {
  
  state = {};

  render() {
    return (
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
