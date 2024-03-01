import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Watchlist.style.ts';

type WatchlistItemProps = {
  item: {
    id: number;
    title?: string;
    name?: string;
    overview: string;
    poster_path: string;
    release_date?: string;
    first_air_date?: string;
    vote_average: number;
    mediaType: 'movie' | 'TV' | string;
  };
};

const WatchlistItem = ({item}: WatchlistItemProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details', {media: item});
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.itemImage}
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        />
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WatchlistItem;
