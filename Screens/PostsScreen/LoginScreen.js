import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Text,
} from "react-native";

export default function LoginScreen() {
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
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
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
    resizeMode: "contain",
    alignItems: "center",
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
});
