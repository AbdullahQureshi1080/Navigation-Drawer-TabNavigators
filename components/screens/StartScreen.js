import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
  
  
  const StartScreen = ({navigation, route}) => {
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  

  export default StartScreen;