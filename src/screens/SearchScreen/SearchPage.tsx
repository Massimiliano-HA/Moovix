import React, {useState, useCallback} from 'react';
import axios from 'axios';
import {View, TextInput, FlatList} from 'react-native';
import MovieOrSeriesItem from '../../components/MovieOrSerieItem/MovieOrSerieItem.tsx';
import {styles} from './Search.style.ts';

interface SearchPageProps {
  navigation: any;
}

const SearchPage: React.FC<SearchPageProps> = ({navigation}) => {
  const [newSearch, setNewSearch] = useState('');
  const [moviesAndSeries, setMoviesAndSeries] = useState([]);

  const filteredMedia = moviesAndSeries.filter((item: any) =>
    item.title.toLowerCase().includes(newSearch.toLowerCase()),
  );

  const goToDetails = useCallback(
    (item: any, type: any) => {
      navigation.navigate('DetailsPage', {media: item, mediaType: type});
    },
    [navigation],
  );

  const fetchMedia = async (searchTerm: string) => {
    if (searchTerm.trim() !== '') {
      try {
        const responseMovies = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
            params: {
              query: searchTerm,
              include_adult: false,
              language: 'en-US',
              page: 1,
            },
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          },
        );

        const responseSeries = await axios.get(
          'https://api.themoviedb.org/3/search/tv',
          {
            params: {
              query: searchTerm,
              include_adult: false,
              language: 'en-US',
              page: 1,
            },
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          },
        );

        const newMovies = responseMovies.data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          overview: movie.overview,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          mediaType: 'movie',
        }));

        const newSeries = responseSeries.data.results.map((series: any) => ({
          id: series.id,
          title: series.name,
          poster_path: series.poster_path,
          overview: series.overview,
          first_air_date: series.first_air_date,
          vote_average: series.vote_average,
          mediaType: 'tv',
        }));

        setMoviesAndSeries([...newMovies, ...newSeries]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.inputText}
        placeholder="Rechercher un film ou une série"
        placeholderTextColor="lightgray"
        onChangeText={text => {
          setNewSearch(text);
          fetchMedia(text);
        }}
        value={newSearch}
      />
      <FlatList
        data={filteredMedia}
        contentContainerStyle={styles.listContainer}
        numColumns={3}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <MovieOrSeriesItem
              item={item}
              goToDetails={(item: {mediaType: any}) =>
                goToDetails(item, item.mediaType)
              }
            />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default SearchPage;
