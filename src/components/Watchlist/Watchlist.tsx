import React from 'react';

import {View} from 'react-native';
import {styles} from './Watchlist.style.ts';

const Watchlist = ({ savedMediaData }) => {
    console.log(savedMediaData);
    return (
        <View style={styles.sectionContainer} />
    );
};

export default Watchlist;
