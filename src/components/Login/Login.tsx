import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { styles } from "./Login.style.ts";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Login = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const navigation = useNavigation();

  const goToRegister = useCallback(() => {
    navigation.navigate("Register");
  }, [navigation]);

  const goToHome = useCallback(() => {
    navigation.navigate("TabNavigator");
  }, [navigation]);

  const users = useSelector((state: any) => state.user.users);

  useEffect(() => {
    setNameError(username === "");
    setPasswordError(password.length < 3);
  }, [username, password]);

  const handleConnexion = useCallback(() => {
    if (username === "") {
      setNameError(true);
      return;
    }
    if (password.length < 3) {
      setPasswordError(true);
      return;
    }

    const foundUser = users.find(
      (user: any) => user.username === username && user.password === password
    );
    if (foundUser) {
      Alert.alert("Connexion réussie", `Bienvenue, ${username} !`);
      goToHome();
    } else {
      Alert.alert("Erreur", "Nom d'utilisateur ou mot de passe incorrect.");
    }
  }, [username, password, users]);

  return (
    <KeyboardAvoidingView style={styles.sectionContainer} behavior="padding">
      <Text style={styles.sectionTitle}>Connexion</Text>
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="Nom d'utilisateur"
          placeholderTextColor="#BCBCBC"
          style={nameError ? styles.inputError : styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoFocus={true}
        />
        <TextInput
          placeholder="Mot de passe"
          placeholderTextColor="#BCBCBC"
          style={passwordError ? styles.inputError : styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleConnexion}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.buttonText}>Pas de compte ? Inscrivez-vous</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
