import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './Details.style.ts';
import {useDispatch, useSelector} from 'react-redux';
import {addToWatchlist} from '../../redux/reducers/userReducer.ts';

interface DetailsPageProps {
  route: {
    params: {
      media: {
        id: number;
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
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user.currentUser);

  const addToWatchlistHandler = () => {
    const watchlistItem = {
      id: media.id,
      title: media.title,
      overview: media.overview,
      poster_path: media.poster_path,
      release_date: media.release_date,
      first_air_date: media.first_air_date,
      vote_average: media.vote_average,
      mediaType: media.mediaType,
    };
    dispatch(addToWatchlist([watchlistItem]));
    Alert.alert('Watchlist', 'Votre contenu à été ajouté dans votre watchlist');
  };

  if (currentUser) {
    console.log(currentUser.watchlist);
  } else {
    console.log("L'utilisateur n'est pas connecté.");
  }

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
        <TouchableOpacity style={styles.button} onPress={addToWatchlistHandler}>
          <Text style={styles.buttonText}>Ajouter à ma watchlist</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DetailsPage;
