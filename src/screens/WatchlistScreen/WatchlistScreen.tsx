import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from '../../../global.style.ts';
import Watchlist from "../../components/Watchlist/Watchlist.tsx";
import AsyncStorage from '@react-native-async-storage/async-storage';

const WatchlistScreen = ({}) => {
  const [savedMediaData, setSavedMediaData] = useState([]);

  useEffect(() => {
    // Charge les données sauvegardées depuis AsyncStorage lors du montage du composant
    loadSavedMediaData();
  }, []);

  const loadSavedMediaData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('savedMediaData');
      if (storedData) {
        setSavedMediaData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error loading saved media data:', error);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      {/* Utilisez le composant Text pour afficher du texte avec une couleur blanche */}
      <Text style={{ color: 'white' }}>Tester ici le screen</Text>
      {/* Passe les données sauvegardées à Watchlist */}
      <Watchlist savedMediaData={savedMediaData} />
    </SafeAreaView>
  );
};

export default WatchlistScreen;

