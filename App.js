import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/photo-bg.jpg")}
      >
        <View style={styles.form}>
          <View>
            <TextInput style={styles.input} textAlign="left" />
          </View>
        </View>
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
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    height: 50,
    color: "#212121",
    paddingLeft: 16,
  },
  form: {},
});
