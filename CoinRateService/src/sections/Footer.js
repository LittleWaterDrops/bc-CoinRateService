import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import CoinLabel from '../components/CoinLabel';
  
export default Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.scorllViewBackGround}>
                <ScrollView style={styles.scrollView}>

                    <View style={styles.coinLabelBox}>

                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>
                        <CoinLabel symbol={'BTC'}/>

                    </View>
                </ScrollView>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    footer: {
        height: 180,
        flexDirection: 'column',
        backgroundColor: '#DDDDDD',
    },
    scorllViewBackGround: {
        height: 120,
        backgroundColor: '#EEF0FD',
    },
    coinLabelBox: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        flexWrap: 'wrap',
        paddingTop: 8,
    },
    scrollView: {
        flexDirection: 'column',
    },
});
