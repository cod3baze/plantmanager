import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "../styles/colors";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: IButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Button;
