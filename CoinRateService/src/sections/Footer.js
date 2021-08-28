import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import CoinLabel from '../components/CoinLabel';
import StopWatchButton from '../components/StopWatchButton';
  
/** 
 * This section shows selected coin label and stopwatch button when selected coin is exist.
 * Here I used scroll view, so if label is too much, we can scroll those to see.
 * It located under the content. It is related by 'Content.js'. These two section is default display before stopwatch able.
 * Also we can start stopwatch by press start button. It gives stopwatch start parameter to parent.
 */
export default Footer = ({coinSelected, selectedCoin, parentCallback, stopWatchStart}) => {
    
    /** This function is give parameter symbol to ContainerContentFooter that want to remove. */
    removeCoinLabel = (coinIdx, removeSymbol) =>{
    parentCallback(coinIdx, removeSymbol);  
    }

    /** This check stopwatch start callback. If it start, stopwatch Activate. */
    stopWatchStarted = (state) =>{
        if(state == 1){
            stopWatchStart();
        }
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

                    <StopWatchButton initState={0} parentCallback={this.stopWatchStarted}/>
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
