import React from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';
  
/**
 * This section shows logo with 'haru' on the top of screen.
 */
export default Header = () => {
    return (
        <View style={styles.header}>
            <Image 
                style={styles.logoSymbol}
                source={require('CoinRateService/src/assets/images/img_symbol.png')}/>
                <View style={styles.logoSpace}/>
            <Image 
                style={styles.logoUnion}
                source={require('CoinRateService/src/assets/images/Union.png')}/>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 24,
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
