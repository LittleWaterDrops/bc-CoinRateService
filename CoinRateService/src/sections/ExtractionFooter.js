import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { isEmptyObject } from '../functions/isEmptyObject';
/** This is header of extracted coin list */
const header = ['코인','가격','24h(%)','7d(%)'];
  
/**
 * This section is display list of extracted coin data.
 * When stopwatch passed 5 seconds first, extracted coin data list showed.
 * List contains header of list, data of list.
 * Header is consisted of '코인, 가격, 24h, 7d'.
 * data of list is consisted of 'BTC logo, symbol, price, percent change of 24H, percent change of 7D'.
 * price is shown by KRW. Include all value of price, perenct change, precision is 2.
 * If percent change is plus, color is green. If it is minus, color is red. If it is 0, color is black.
 * If selected coin is so much, user can see all by scroll, not more button.
 * This section is related with Extraction Content.
 */
export default ExtractionFooter = ({extractedCoinList}) => {

    /** This function decare color of percent text by it's value. */
    const percentTextColor = (item) =>{
        return(
            item > 0 ? 
            styles.flatListPercentTextGreen : 
            ( item == 0 ? 
                styles.flatListPriceText : 
                styles.flatListPercentTextRed
            )
        );
    }

    /** This is render item to display list. */
    const renderItem = ({item}) =>(
                <View style={styles.flatListStyle}>
                    <View style={styles.flatListSymbol}>
                        <BTCLogo/>
                        <Text style={styles.flatListSymbolText}>  {item[1]}</Text>
                    </View>
                    <View style={styles.flatListPrice}>
                        <Text style={styles.flatListPriceText}>₩{item[2].toLocaleString(undefined,{minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                    </View>
                    <View style={styles.flatListPercent}>
                    <Text style={percentTextColor(item[3])}>{item[3].toFixed(2)}%</Text>
                    </View>
                    <View style={styles.flatListPercent}>
                    <Text style={percentTextColor(item[4])}>{item[4].toFixed(2)}%</Text>
                    </View>
                </View>
    );

    if(!isEmptyObject(extractedCoinList)){
        return (
            <View style={styles.extractionFooter}>

                <View style={styles.headerStyle}>
                    <View style={styles.headerSymbol}>
                        <Text style={styles.headerSymbolText}>{header[0]}</Text>
                    </View>
                    <View style={styles.headerPrice}>
                        <Text style={styles.headerPriceText}>{header[1]}</Text>
                    </View>
                    <View style={styles.headerPercent}>
                        <Text style={styles.headerPriceText}>{header[2]}</Text>
                    </View>
                    <View style={styles.headerPercent}>
                        <Text style={styles.headerPriceText}>{header[3]}</Text>
                    </View>
                </View>
                    <FlatList
                    data={extractedCoinList}
                    renderItem={renderItem}
                    keyExtractor={item => item[0]}
                    />                    
            </View>
        );
    }
    else{
        return null;
    }
};

/** This is BTC logo to show logo beside symbol. */
const BTCLogo = () => {
    return (
        <Image 
            style={styles.logo}
            source={require('CoinRateService/src/assets/images/BTC.png')}
            height={24}
            width={24}
        />
    );
}

const styles = StyleSheet.create({
    extractionFooter: {
        height: 490,
        paddingHorizontal: 24,
    },
    headerStyle: {
        height: 36, 
        borderWidth: 1,
        borderTopColor:'#EEF0F2',
        borderBottomColor: '#EEF0F2',
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    headerSymbol: {
        flex: 1,
        flexDirection: 'row', 
        alignItems:'center',
    },
    headerText: {
        fontFamily: 'Inter-Regular', 
        fontSize: 14, 
        color: '#171F46',
    },
    headerPrice: {
        flex: 4,
    },
    headerPriceText: {
        fontFamily: 'Inter-Regular', 
        fontSize: 14, 
        color: '#171F46',
        textAlign: 'right',
    },
    headerPercent: {
        flex: 2,
    },
    flatListStyle: {
        height: 57, 
        borderWidth: 1,
        borderTopColor:'#EEF0F2',
        borderBottomColor: '#EEF0F2',
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    flatListSymbol: {
        flex: 1,
        flexDirection: 'row', 
        alignItems:'center',
    },
    flatListSymbolText: {
        fontFamily: 'Inter-Regular', 
        fontSize: 14, 
        color: '#171F46',
    },
    flatListPrice: {
        flex: 4,
    },
    flatListPriceText: {
        fontFamily: 'Inter-Regular', 
        fontSize: 14, 
        color: '#171F46',
        textAlign: 'right',
    },
    flatListPercent: {
        flex: 2,
    },
    flatListPercentTextGreen: {
        fontFamily: 'Inter-Regular', 
        fontSize: 14, 
        color: '#45BA8B',
        textAlign: 'right',
    },
    flatListPercentTextRed: {
        fontFamily: 'Inter-Regular', 
        fontSize: 14, 
        color: '#CA303C',
        textAlign: 'right',
    },
});
