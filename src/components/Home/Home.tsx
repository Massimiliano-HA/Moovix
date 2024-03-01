import React, {useEffect, useState} from 'react';

import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './Home.style.ts';
import axios from 'axios';

type renderItemProps = {
  item: {
    id?: number;
    title: string;
    poster_path: string;
    mediaType?: 'movie' | 'TV';
  };
};

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const fetchMedia = async () => {
    try {
      const responsePopularMovies = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1',
        {
          params: {
            include_adult: false,
            language: 'en-US',
            region: 'FR',
            page: 1,
          },
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
        },
      );

      const newPopularMovies = responsePopularMovies.data.results.map(
        (movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          mediaType: 'movie',
        }),
      );

      setPopularMovies(newPopularMovies);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    try {
      const responsePopularTVShows = await axios.get(
        'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
        {
          params: {
            include_adult: false,
            language: 'fr-FR',
            page: 1,
          },
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
        },
      );

      const popularTVShows = responsePopularTVShows.data.results.map(
        (show: any) => ({
          id: show.id,
          title: show.name,
          poster_path: show.poster_path,
          mediaType: 'TV',
        }),
      );
      setPopularSeries(popularTVShows);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    try {
      const responseNowPlayingMovies = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        {
          params: {
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

      const newNowPlayingMovies = responseNowPlayingMovies.data.results.map(
        (movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          mediaType: 'movie',
        }),
      );

      setNowPlayingMovies(newNowPlayingMovies);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    try {
      const responseUpcomingMovies = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        {
          params: {
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

      const newUpcomingMovies = responseUpcomingMovies.data.results.map(
        (movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          mediaType: 'movie',
        }),
      );

      setUpcomingMovies(newUpcomingMovies);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const renderItem = ({item}: renderItemProps) => (
    <>
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
      </View>
    </>
  );

  return (
    <ScrollView>
      <Text style={styles.title}>Accueil</Text>
      <Text style={styles.flatListTitle}>Les films les plus populaires</Text>
      <FlatList
        horizontal
        data={popularMovies}
        renderItem={renderItem}
        style={styles.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.flatListTitle}>Les séries les plus populaires</Text>
      <FlatList
        horizontal
        data={popularSeries}
        renderItem={renderItem}
        style={styles.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.flatListTitle}>Actuellement au cinéma</Text>
      <FlatList
        horizontal
        data={nowPlayingMovies}
        renderItem={renderItem}
        style={styles.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.flatListTitle}>Films prochainement disponible</Text>
      <FlatList
        horizontal
        data={upcomingMovies}
        renderItem={renderItem}
        style={styles.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};
export default Home;
