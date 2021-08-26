import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import CoinLabel from '../components/CoinLabel';
  
export default Footer = ({coinSelected, selectedCoin, parentCallback}) => {

    removeCoinLabel = (removeSymbol) =>{
        parentCallback(removeSymbol);
    }

    if(coinSelected == true){
        let initialArr = selectedCoin;
        if(typeof(initialArr) == 'string'){
            initialArr = [initialArr];
        }
        console.log('asdfd');
        console.log(initialArr);
        console.log(typeof(initialArr));

        return (
            <View style={styles.footer}>
                <View style={styles.scorllViewBackGround}>
                    <ScrollView style={styles.scrollView}>

                        <View style={styles.coinLabelBox}>

                            {
                                initialArr.map((item)=> {
                                    return (
                                        <CoinLabel key={item} symbol={item} parentCallback={this.removeCoinLabel}/>
                                    );
                                })
                            }

                        </View>
                    </ScrollView>
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
        height: 180,
        flexDirection: 'column',
        backgroundColor: '#DDDDDD',
    },
    container: {
        height: 180,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
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
