import React from 'react';
import {
    FlatList,
    Image,

    StyleSheet,
    Text,



    View
} from 'react-native';
import { isEmptyObject } from '../functions/isEmptyObject';

const header = [['코인'],['가격','24h(%)','7d(%)']];
  
export default ExtractionFooter = ({extractedCoinList}) => {
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
                        <Text style={styles.headerSymbolText}>코인</Text>
                    </View>
                    <View style={styles.headerPrice}>
                        <Text style={styles.headerPriceText}>가격</Text>
                    </View>
                    <View style={styles.headerPercent}>
                    <Text style={styles.headerPriceText}>24h(%)</Text>
                    </View>
                    <View style={styles.headerPercent}>
                    <Text style={styles.headerPriceText}>7d(%)</Text>
                    </View>
                </View>
                
                {/* <ScrollView style={styles.scrollView}> */}
                    <FlatList
                    data={extractedCoinList}
                    renderItem={renderItem}
                    keyExtractor={item => item[0]}
                    />                    
                {/* </ScrollView> */}
            </View>
        );
    }
    else{
        return null;
    }
};

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
    scrollView: {
        flexDirection: 'column',
    },
});
