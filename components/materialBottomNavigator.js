import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const bottomNavigator = () =>{
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      shifting={true}
      barStyle={{ backgroundColor: '#694fad'}
    }
  >
      <Tab.Screen 
      name="List" 
      component={List} 
      options={{
        tabBarBadge:true,
        tabBarColor:"#D02760",
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-list" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="Names" 
      component={Names}
      options={{
        // tabBarBadge:true,  
        tabBarColor:"#006D69",
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-contacts" color={color} size={26} />
        ),
      }}
       />
    </Tab.Navigator>
  );
}

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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
export default bottomNavigator;