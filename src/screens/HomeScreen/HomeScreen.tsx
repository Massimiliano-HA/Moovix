import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../global.style.ts'
import Home from "../../components/Home/Home.tsx";

const HomeScreen = ({}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <Home />
        </SafeAreaView>
    );
};

export default HomeScreen
