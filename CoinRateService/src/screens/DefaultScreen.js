import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';
import { isEmptyObject } from '../functions/isEmptyObject';
import Content from '../sections/Content';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Title from '../sections/Title';

const DefaultScreen = () => {
    const [coinSelected, setCoinSelected] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState([]);
    const [symbolToRemove, setSymbolToRemove] = useState([]);


    selectCoinCallback = (selectedCoin) => {
        if(isEmptyObject(selectedCoin)){
            setCoinSelected(false);
            setSelectedCoin([]);
        }
        else{
            setCoinSelected(true);
            setSelectedCoin(selectedCoin);
        }
    }

    removeCoinLabelCallback = (coinIdx, removeSymbol) =>{
        setSymbolToRemove([coinIdx, removeSymbol]);

            //         setSelectedCoin(selectedCoin => selectedCoin.filter(function(selectedCoin) { 
            //     return JSON.stringify(selectedCoin) != JSON.stringify([coinIdx, removeSymbol]);
            // }));
    }

    return (
    <SafeAreaView>
        <View>
            <Header/>
            <View style={styles.spaceHeaderTitle}/>
            <Title/>
            <View style={styles.spaceTitleContent}/>
            <Content parentCallback={this.selectCoinCallback} removableSymbol={symbolToRemove}/>
            <View style={styles.spaceContentFooter}/>
            <Footer coinSelected={coinSelected} selectedCoin={selectedCoin} parentCallback={this.removeCoinLabelCallback}/>   
        </View>  
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    spaceHeaderTitle: {
        height: 36,
    },
    spaceTitleContent: {
        height: 16,
    },
    spaceContentFooter: {
        height: 30,
    },
    headerLogoFont: {
        fontFamily: 'Inter-Bold',
        fontSize: 30,
    },
    koreanRegularFont: {
        fontFamily: 'SpoqaHanSansNeo-Regular',
        fontSize : 100,
    },
    englishRegularFont: {
        fontFamily: 'Inter-Regular',
        fontSize : 100,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default DefaultScreen;