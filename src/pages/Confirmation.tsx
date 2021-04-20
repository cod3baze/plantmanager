import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Confirmation: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😀</Text>

        <Text style={styles.subtitle}>Prontinho</Text>

        <Text style={styles.title}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title="Começar" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  subtitle: {
    fontSize: 30,
    fontFamily: fonts.text,
    textAlign: "center",
    color: colors.heading,
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    lineHeight: 38,
    color: colors.heading,
    marginTop: 15,
  },
  footer: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 50,
  },
});

export default Confirmation;
