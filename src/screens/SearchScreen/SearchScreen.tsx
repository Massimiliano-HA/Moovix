import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../global.style.ts'
import Search from "../../components/Search/Search.tsx";

const SearchScreen = ({}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <Search />
        </SafeAreaView>
    );
};

export default SearchScreen
