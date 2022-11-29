import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-web";

function getRandomNumber() {
   let num = Math.round(Math.floor(Math.random() * 1000));
   return num > 0 && num < 252 ? num : Math.round(num / 4);
}

const ColorsTask = () => {
   const [color, setColor] = useState("233, 8 ,9");

   const Colorchange = () => {
      const r = getRandomNumber();
      const g = getRandomNumber();
      const b = getRandomNumber();
      console.log(r.toString());
      const c = r.toString() + "," + g.toString() + "," + b.toString();
      setColor(c);
   };
   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={() => Colorchange()}>
            <Text
               style={{
                  backgroundColor: "grey",
                  margin: 10,
                  padding: 10,
                  color: "white",
                  fontSize: 20,
               }}
            >
               Click me to change Color
            </Text>
         </TouchableOpacity>

         <View
            style={{
               backgroundColor: `rgb(${color})`,
               height: 100,
               width: 100,
            }}
         ></View>
      </View>
   );
};

export default ColorsTask;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
   },
});
