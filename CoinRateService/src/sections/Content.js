import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
  
export default Content = () => {
    return (
        <View style={styles.content}>
        </View>
    );
};
const styles = StyleSheet.create({
    content: {
        height: 536,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#7DDBCF'
    },
    logoSymbol: {
        width: 22.8,
        height: 34,
    },
    logoUnion: {
        width: 60.76,
        height: 21.22,
    },
    logoSpace: {
        width: 12.05,
    },
});
