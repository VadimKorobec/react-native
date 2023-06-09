import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/photo-bg.jpg")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 78 }}
          >
            <View>
              <TextInput
                style={styles.input}
                textAlign="left"
                placeholder="Логін"
                onFocus={() => setIsShowKeyboard(true)}
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                textAlign="left"
                placeholder="Адреса електронної пошти"
                onFocus={() => setIsShowKeyboard(true)}
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                textAlign="left"
                secureTextEntry={true}
                placeholder="Пароль"
                onFocus={() => setIsShowKeyboard(true)}
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={() => setIsShowKeyboard(false)}
            >
              <Text style={styles.btnTitle}>Зареєстуватися</Text>
            </TouchableOpacity>
            <View style={styles.textWrapper}>
              <Text style={styles.textForm}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    height: 50,
    color: "#212121",
    paddingLeft: 16,
    fontSize: 16,
  },
  form: {
    marginHorizontal: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#fff",
    fontSize: 16,
  },
  textWrapper: {
    alignItems: "center",
    marginTop: 16,
  },
  textForm: {
    color: "#1B4371",
    fontSize: 16,
  },
});
