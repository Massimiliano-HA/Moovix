import React from 'react';
import {Text, SafeAreaView, Image, ScrollView} from 'react-native';
import {styles} from './Details.style.ts';

interface DetailsPageProps {
  route: {
    params: {
      media: {
        title: string;
        poster_path: string;
        overview: string;
        release_date?: string;
        first_air_date?: string;
        vote_average: number;
        mediaType: string;
      };
    };
  };
}

const DetailsPage: React.FC<DetailsPageProps> = ({route}) => {
  const {media} = route.params;

  return (
    <ScrollView style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Titre : {media.title}</Text>
        <Image
          style={styles.poster}
          source={{uri: `https://image.tmdb.org/t/p/w500${media.poster_path}`}}
        />
        <Text style={styles.overview}>Résumé : {media.overview} </Text>
        {media.mediaType == 'movie' ? (
          <Text style={styles.overview}>
            Date de sortie : {media.release_date}
          </Text>
        ) : (
          <Text style={styles.overview}>
            Date de sortie : {media.first_air_date}
          </Text>
        )}
        <Text style={styles.note}>
          Note moyenne : {media.vote_average} / 10
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DetailsPage;
