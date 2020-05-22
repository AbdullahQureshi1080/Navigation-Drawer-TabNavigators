
import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Next Screen" onPress={()=>{navigation.navigate("Start",{name:"Messi",id:"barca"})}}></Button>
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
  

  export default HomeScreen;