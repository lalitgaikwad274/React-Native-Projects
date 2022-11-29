import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
   const [count, setCount] = useState(0);
   return (
      <View style={styles.container}>
         <Button
            style={styles.btn}
            onPress={() => setCount(count + 1)}
            title="click me"
         ></Button>
         <Text style={{ fontSize: 30 }}>click {count} no of times</Text>
      </View>
   );
};

export default Counter;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: 30,
   },
   btn: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: 100,
      marginTop: 30,
   },
});
