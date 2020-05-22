import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import StartScreen from "./screens/StartScreen";
import {Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();

const stackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerRight: () => (
          <View style={{paddingRight:10 }}>
          <Ionicons 
            name="md-settings" 
            size={32} 
            color="black"
            // onPress={()=>navigation.toggleDrawer()}
        />  
      </View>
      ),
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation})=>({
          //  headerTitleAlign:"left",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "crimson",
          },
          headerLeft: () => (
            <View style={{paddingLeft:10 }}>
                <Ionicons 
                  name="md-menu" 
                  size={32} 
                  color="black"
                  onPress={()=>navigation.toggleDrawer()}
              />  
            </View>    
          ),
    })}
      />
      <Stack.Screen 
      name="Start" 
      component={StartScreen} 
      options={({navigation})=>({
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "crimson",
        },
        headerLeft: () => (
          <View style={{paddingLeft:10 }}>
              <Ionicons 
                name="md-arrow-back" 
                size={32} 
                color="black"
                onPress={()=>navigation.goBack()}
            />  
          </View>    
        ),
  })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default stackNavigator;
