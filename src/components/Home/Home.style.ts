import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: "column",
    flex: 1,
  },
  itemContainer: {
    alignItems: "center",
    marginRight: 10,
    width: 100, // Définir la même largeur que l'itemImage
  },
  itemImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  itemTitle: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "600",
    color: "white",
    textAlign: "center", // Centrer le texte
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
    marginLeft: 10,
    marginBottom: 20,
  },
  flatListContainer: {
    marginBottom: 20,
  },
  flatListTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
    marginBottom: 10,
  },
});
