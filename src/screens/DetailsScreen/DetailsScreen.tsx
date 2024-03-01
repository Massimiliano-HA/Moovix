import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "../../../global.style.ts";
import Details from "../../components/Details/Details.tsx";

const DetailsScreen = ({}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Details />
    </SafeAreaView>
  );
};

export default DetailsScreen;
