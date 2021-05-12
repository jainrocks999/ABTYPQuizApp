import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  button: {
   // backgroundColor: color,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "86%",
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  buttonContainer: {
    //flexDirection: "row",
   // flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems:'center'
  }
});

export const Button = ({ text,disable,color, onPress = () => {} }) => (
  <TouchableOpacity disabled={disable} onPress={onPress} style={[styles.button,{backgroundColor:color}]}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);