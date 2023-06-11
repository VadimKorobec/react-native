import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView, // новий імпорт
  Platform, // новий імпорт
  ImageBackground,
} from "react-native";

export default function Screen() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/photo-bg.jpg")}
        >
          <TextInput
            placeholder="Type text"
            value={text}
            onChangeText={setText}
          />
          <TextInput
            placeholder="Type text"
            value={text}
            onChangeText={setText}
          />
        </ImageBackground>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
