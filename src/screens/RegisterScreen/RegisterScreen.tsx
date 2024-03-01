import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "../../../global.style.ts";
import Register from "../../components/Register/Register.tsx";

const RegisterScreen = ({}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Register />
    </SafeAreaView>
  );
};

export default RegisterScreen;
