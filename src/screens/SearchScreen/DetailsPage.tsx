// DetailsPage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMedia } from '../../components/Slices/userSlice';
import { SafeAreaView, ScrollView, Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

interface DetailsPageProps {
  route: {
    params: {
      media: {
        title: string;
        poster_path: string;
        overview: string;
        id: string;
        release_date?: string;
        first_air_date?: string;
        vote_average: number;
      };
      mediaType: string;
    };
  };
}

const DetailsPage: React.FC<DetailsPageProps> = ({ route }) => {
  const { media, mediaType } = route.params;
  const dispatch = useDispatch();
  const savedMediaData = useSelector((state: any) => state.media.savedMedia);

  useEffect(() => {
    // Load saved media data from Redux when the component mounts
    // You can dispatch an action here to load data from AsyncStorage if needed
  }, []);

  const renderSavedMediaData = () => {
    return savedMediaData.map((data) => (
      <View key={data.id} style={styles.savedMediaDataContainer}>
        <Text style={styles.savedMediaDataText}>{data.title}</Text>
        <Text style={styles.savedMediaDataText}>
          Release Date: {data.release_date || data.first_air_date}
        </Text>
        <Text style={styles.savedMediaDataText}>
          Average note: {data.vote_average} / 10
        </Text>
      </View>
    ));
  };

  const saveToRedux = () => {
    const isNewData = savedMediaData.some((item) => item.title === media.title);

    if (!isNewData) {
      const newData = {
        id: media.id,
        title: media.title,
        poster_path: media.poster_path,
        overview: media.overview,
        release_date: media.release_date,
        first_air_date: media.first_air_date,
        vote_average: media.vote_average,
      };

      // Dispatch the saveMedia action to update the Redux store
      dispatch(saveMedia(newData));

      console.log('Data saved successfully:', newData);
    } else {
      console.log('Data already exists. Not saving duplicates.');
    }
  };

  return (
    <ScrollView style={styles.screen}>
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Title: {media.title}</Text>
        <Image
          style={styles.poster}
          source={{ uri: `https://image.tmdb.org/t/p/w500${media.poster_path}` }}
        />
        <Text style={styles.id}>id: {media.id}</Text>
        <Text style={styles.overview}>Overview: {media.overview}</Text>
        {mediaType === 'movie' ? (
          <Text style={styles.overview}>Release Date: {media.release_date} {media.first_air_date}</Text>
        ) : (
          <Text style={styles.overview}>First Air Date: {media.first_air_date}</Text>
        )}
        <Text style={styles.note}>Average note: {media.vote_average} / 10</Text>

        <TouchableOpacity style={styles.saveButton} onPress={saveToRedux}>
          <Text style={styles.buttonText}>Save Media Info to Redux</Text>
        </TouchableOpacity>

        {/* Display saved media data */}
        {renderSavedMediaData()}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'lightgray',
    maxWidth: 250,
  },
  poster: {
    width: 300,
    height: 400,
    marginRight: 10,
    marginBottom: 10,
  },
  id: {
    marginTop: 20,
    marginBottom: 50,
    color: 'lightgray',
    maxWidth: 350,
    fontSize: 15,
  },
  overview: {
    marginTop: 20,
    color: 'lightgray',
    maxWidth: 350,
    fontSize: 15,
  },
  note: {
    marginTop: 20,
    marginBottom: 50,
    color: 'lightgray',
    maxWidth: 350,
    fontSize: 15,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
  savedMediaDataContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  savedMediaDataText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DetailsPage;