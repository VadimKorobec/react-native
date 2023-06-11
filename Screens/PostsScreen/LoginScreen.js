import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false), Keyboard.dismiss(), setState(initialState);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/photo-bg.jpg")}
      >
        <View style={styles.wrapperForm}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.textHeader}>Увійти</Text>
            </View>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                textAlign="left"
                value={state.email}
                placeholder="Адреса електронної пошти"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View style={{ marginBottom: 43 }}>
              <TextInput
                style={styles.input}
                textAlign="left"
                value={state.password}
                placeholder="Пароль"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={keyboardHide}
            >
              <Text style={styles.btnTitle}>Увійти</Text>
            </TouchableOpacity>
            <View style={styles.textWrapper}>
              <Text style={styles.textForm}>
                Немає акаунту? Зареєструватися
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
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
    alignItems: "center",
  },
  wrapperForm: {
    height: 489,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    marginHorizontal: 16,
  },
  header: {
    alignItems: "center",
    marginTop: 32,
    marginBottom: 33,
  },
  textHeader: {
    fontSize: 30,
    color: "#212121",
    fontFamily: "Roboto-500",
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
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  btnTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto-400",
  },
  textWrapper: {
    alignItems: "center",
  },
  textForm: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-400",
  },
});
