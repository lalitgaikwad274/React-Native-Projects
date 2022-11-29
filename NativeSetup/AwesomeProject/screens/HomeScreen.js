import React from "react";
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
   return (
      <View>
         <Button
            onPress={() => navigation.navigate("UserList")}
            title="Goto User Page"
         ></Button>
         <Button
            onPress={() => navigation.navigate("ImageList")}
            title="Goto Travel Page"
         ></Button>
         <Button
            onPress={() => navigation.navigate("Counter")}
            title="Goto Counter Page"
         ></Button>
         <Button
            onPress={() => navigation.navigate("ColorsTask")}
            title="Goto Colors Page"
         ></Button>
      </View>
   );
};

export default HomeScreen;
