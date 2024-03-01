import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import MovieOrSeriesItem from '../../screens/SearchScreen/MovieOrSerieItem.tsx';
import { useNavigation } from "@react-navigation/native";

interface SearchPageProps {
  navigation: any;
}

const SearchPage: React.FC<SearchPageProps> = ({ navigation }) => {
    const [newSearch, setNewSearch] = useState('');
    const [moviesAndSeries, setMoviesAndSeries] = useState([]);
    const [mediaType, setMediaType] = useState('movie');
  
    const filteredMedia = moviesAndSeries.filter((item: any) =>
      item.title.toLowerCase().includes(newSearch.toLowerCase())
    );
  
    const goToDetails = useCallback(
      (item) => {
        navigation.navigate('DetailsPage', { media: item, mediaType });
      },
      [navigation, mediaType]
    );
  

  const fetchMedia = async (searchTerm: string) => {
    if (searchTerm.trim() !== '') {
      try {
        const responseMovies = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            query: searchTerm,
            include_adult: false,
            language: 'en-US',
            page: 1,
          },
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmVkMDliOGQwNjBjMzVmYzU2YWViNWMyZmRkMWViZCIsInN1YiI6IjY1ZGUwNjhiOWFlNjEzMDE2Mzc0OGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tTCH2-78thqXP1-YtCDTHcPOW9COl8hHQsTIuOZ-B-w',
          },
        });

        const responseSeries = await axios.get('https://api.themoviedb.org/3/search/tv', {
          params: {
            query: searchTerm,
            include_adult: false,
            language: 'en-US',
            page: 1,
          },
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmVkMDliOGQwNjBjMzVmYzU2YWViNWMyZmRkMWViZCIsInN1YiI6IjY1ZGUwNjhiOWFlNjEzMDE2Mzc0OGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tTCH2-78thqXP1-YtCDTHcPOW9COl8hHQsTIuOZ-B-w',
          },
        });

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
        placeholder="Search for a movie or TV show"
        placeholderTextColor= "lightgray"
        onChangeText={(text) => {
          setNewSearch(text);
          fetchMedia(text);
        }}
        value={newSearch}
      />
      <FlatList
        data={filteredMedia}
        renderItem={({ item }) => <MovieOrSeriesItem item={item} goToDetails={goToDetails} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputText: {
    backgroundColor: 'grey',
    fontSize: 17,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 20,
    color: 'lightgray',

  }
});

export default SearchPage;
