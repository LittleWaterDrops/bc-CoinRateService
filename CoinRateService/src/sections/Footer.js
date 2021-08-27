import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import CoinLabel from '../components/CoinLabel';
import StopWatchButton from '../components/StopWatchButton';
  
export default Footer = ({coinSelected, selectedCoin, parentCallback, stopWatchStart}) => {
    removeCoinLabel = (coinIdx, removeSymbol) =>{
    parentCallback(coinIdx, removeSymbol);  
    }
    stopWatchStarted = () =>{
        stopWatchStart();
    }

    if(coinSelected == true){
        let initialArr = selectedCoin;

        return (
            <View style={styles.footer}>
                <View style={styles.scorllViewSection}>
                    <ScrollView style={styles.scrollView}>

                        <View style={styles.coinLabelBox}>

                            {
                                initialArr.map((item)=> {

                                    return (
                                        <CoinLabel key={item[0]} coinIdx={item[0]} symbol={item[1]} parentCallback={this.removeCoinLabel}/>
                                    );
                                })
                            }

                        </View>
                    </ScrollView>
                </View>

                <View style={styles.stopWatchSection}>

                    <Text style={styles.stopWatchElapse}>
                        00:00:00
                    </Text>

                    <StopWatchButton parentCallback={this.stopWatchStarted}/>
                </View>

            </View>
        );
    }
    else{
        return null;
    }
};
const styles = StyleSheet.create({
    footer: {
        height: 210,
        flexDirection: 'column',
    },
    container: {
        height: 180,
        flexDirection: 'column',
    },
    scorllViewSection: {
        height: 120,
        backgroundColor: '#EEF0FD',
    },
    stopWatchSection: {
        height: 90,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    stopWatchElapse: {
        fontFamily: 'Inter-Regular',
        fontSize: 28,
        color: '#171F46',
    },
    // stopWatchBox: {
    //     width: 106,
    //     height: 56,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#5A41F5',
    //     borderRadius: 4,
    //     color:'#FFFFFF',
    // },
    // stopWatchBoxText: {
    //     fontFamily: 'Inter-Regular',
    //     fontSize: 18,
    //     color: '#FFFFFF',
    // },
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
