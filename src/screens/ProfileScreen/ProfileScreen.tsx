import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../global.style.ts';
import Profile from '../../components/Profile/Profile.tsx';

const ProfileScreen = ({}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Profile />
    </SafeAreaView>
  );
};

export default ProfileScreen;
