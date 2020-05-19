import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { color } from "react-native-reanimated";


const Stack = createStackNavigator();

class App extends React.Component {
  
  state = {};
  HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Next Screen" onPress={()=>{navigation.navigate("Start",{name:"Messi",id:"barca"})}}></Button>
      </View>
    );
  };

  StartScreen = ({navigation, route}) => {
    const routeAccess = route.params;
    const id = routeAccess.id;

    return (
      <View style={styles.container}>
        <Text>Start Screen</Text>
        <Text>{id}</Text>
        <Button title="New ID" onPress={()=>{navigation.setParams({id:"Real"})}}></Button>
        <Button title="Prev Screen" onPress={()=>{navigation.goBack()}}></Button>
      </View>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName={"Home"}
        screenOptions={{
          headerTitleAlign:"center",
        }}>
          <Stack.Screen 
          name="Home"
          component={this.HomeScreen}
          options={{
            headerTitleAlign:"left",
            headerTintColor:"white",
            headerStyle:{
              backgroundColor:"crimson",
            },
            headerRight:()=> <Button title = "Edit"/>
          }} 
          />
          <Stack.Screen name="Start" component={this.StartScreen} />
        </Stack.Navigator>
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
