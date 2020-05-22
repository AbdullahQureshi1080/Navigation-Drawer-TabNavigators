import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import  stackNavigator from "./stackNavigator";
import {Ionicons} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Names" component={Names} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const List = () =>{   
    return (
      <View style={styles.container}>
        <Text>BT1</Text>
      </View>
    );
 }
 const Names = () =>{   
  return (
    <View style={styles.container}>
      <Text>BT2</Text>
    </View>
  );
}

const MyDrawer=()=>{
  return(
    <Drawer.Navigator>
          <Drawer.Screen 
          name = "Home"
          component={stackNavigator}
          options={{
            drawerLabel:"Home",
            // drawerStyle:{
            //   fontSize=
            // },
            drawerIcon:()=> <Ionicons name="md-home" size={32} color="crimson" />
          }}
          />
          <Drawer.Screen name = "Drawer2" component={MyTabs}/>
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