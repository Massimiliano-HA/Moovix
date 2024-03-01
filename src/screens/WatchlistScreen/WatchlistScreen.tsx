import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../global.style.ts';
import Watchlist from '../../components/Watchlist/Watchlist.tsx';

const WatchlistScreen = ({}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Watchlist />
    </SafeAreaView>
  );
};

export default WatchlistScreen;
