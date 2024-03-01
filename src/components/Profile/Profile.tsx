import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './Profile.style.ts';
import {useSelector} from 'react-redux';

const Profile = ({}) => {
  const currentUser = useSelector((state: any) => state.user.currentUser);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Profil de l'utilisateur
      </Text>
      {currentUser && (
        <View>
          <Text>Nom d'utilisateur: {currentUser.username}</Text>
          {currentUser.avatar && (
            <Image
              source={{uri: currentUser.avatar}}
              style={{width: 100, height: 100, borderRadius: 50}}
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
