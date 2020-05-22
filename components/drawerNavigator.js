import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import  stackNavigator from "./stackNavigator";
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import bottomNavigator from './materialBottomNavigator';

// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#f0edf6"
//       inactiveColor="#3e2465"
//       barStyle={{ backgroundColor: '#694fad' }}
//   >
//       <Tab.Screen 
//       name="List" 
//       component={List} 
//       options={{
//         tabBarIcon: ({ color }) => (
//           <Ionicons name="md-list" color={color} size={26} />
//         ),
//       }}
//       />
//       <Tab.Screen 
//       name="Names" 
//       component={Names}
//       options={{
//         tabBarIcon: ({ color }) => (
//           <Ionicons name="md-contacts" color={color} size={26} />
//         ),
//       }}
//        />
//     </Tab.Navigator>
//   );
// }

const Drawer = createDrawerNavigator();

// const List = () =>{   
//     return (
//       <View style={styles.container}>
//         <Text>BT1</Text>
//       </View>
//     );
//  }
//  const Names = () =>{   
//   return (
//     <View style={styles.container}>
//       <Text>BT2</Text>
//     </View>
//   );
// }

const MyDrawer=()=>{
  return(
    <Drawer.Navigator>
          <Drawer.Screen 
          name = "Home"
          component={stackNavigator}
          options={{
            drawerLabel:"Home",
            drawerIcon:()=> <Ionicons name="md-home" size={32} color="crimson" />
          }}
          />
          <Drawer.Screen
           name = "Function" 
           component={bottomNavigator}
           options={{
            drawerLabel:"Account",
            drawerIcon:()=> <MaterialCommunityIcons name="account" size={32} color="crimson" />
          }}
           />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default MyDrawer;