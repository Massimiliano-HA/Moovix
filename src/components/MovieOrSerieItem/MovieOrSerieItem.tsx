import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './MovieOrSerieItem.style.ts';

interface MovieOrSeriesItemProps {
  item: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  };
  goToDetails: (item: any) => void;
}

const MovieOrSeriesItem: React.FC<MovieOrSeriesItemProps> = ({
  item,
  goToDetails,
}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => goToDetails(item)}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieOrSeriesItem;
