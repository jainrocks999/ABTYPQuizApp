import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../colors";
const CustomButton1 = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height:50,
    backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  buttonText: {
    alignSelf: "center",
    color: colors.white,
    fontFamily:'Poppins-Bold',
    fontSize: 16,
  },
});

export default CustomButton1;