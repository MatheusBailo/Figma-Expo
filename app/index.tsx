import { router, Stack } from "expo-router";
import {
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function HomeScreen() {
  const onPress = () => {
    router.push("/(tabs)");
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <ImageBackground
        source={require("../assets/images/fundo.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>
          <Image
            source={require("../assets/images/logo.png")}
            style={[styles.logo, { width: screenWidth * 0.99 }]}
            resizeMode="contain"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FE7F0C",
  },
  safeArea: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10, 
  },
  logo: {
    height: undefined,
    aspectRatio: 4,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 5, 
  },
  button: {
     position: "absolute",
  bottom: 70, 
  left: screenWidth * 0.30, 
  backgroundColor: "#FE7F0C",
  paddingVertical: 12,
  paddingHorizontal: 40,
  borderRadius: 20,
  borderWidth: 2,
  borderColor: "black",
  elevation: 3,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
