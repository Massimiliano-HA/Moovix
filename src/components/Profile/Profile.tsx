import React, {useCallback} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Profile.style.ts';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {logoutUser} from '../../redux/reducers/userReducer.ts';

const Profile = ({}) => {
  const navigation = useNavigation();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const goToLogin = useCallback(() => {
    logoutUser();
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.title}>Profil de l'utilisateur</Text>
      {currentUser && (
        <View>
          {currentUser.avatar && (
            <View style={styles.view}>
              <Image source={{uri: currentUser.avatar}} style={styles.avatar} />
            </View>
          )}
          <View style={styles.view}>
            <Text style={styles.text}>{currentUser.username}</Text>
            <TouchableOpacity style={styles.button} onPress={goToLogin}>
              <Text style={styles.buttonText}>Se déconnecter</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
