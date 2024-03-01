import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    paddingBottom: 20,
  },
  inputsContainer: {
    width: "80%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: "white",
  },
  inputError: {
    height: 40,
    borderColor: "red",
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: "white",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
