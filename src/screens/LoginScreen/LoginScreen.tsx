import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "../../../global.style.ts";
import Login from "../../components/Login/Login.tsx";

type LoginScreenProps = {
  navigation?: any;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Login />
    </SafeAreaView>
  );
};

export default LoginScreen;
