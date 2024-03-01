import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../global.style.ts';
import Login from '../../components/Login/Login.tsx';

const LoginScreen = ({}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Login />
    </SafeAreaView>
  );
};

export default LoginScreen;
