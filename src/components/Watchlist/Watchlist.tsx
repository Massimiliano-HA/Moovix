import React from 'react';
import {View, FlatList} from 'react-native';
import WatchlistItem from './WatchlistItem';
import {useSelector} from 'react-redux';
import {styles} from './Watchlist.style.ts';

const Watchlist = () => {
  const watchlist = useSelector(
    (state: any) => state.user.currentUser?.watchlist || [],
  );

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        horizontal
        data={watchlist}
        renderItem={({item}) => <WatchlistItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Watchlist;
