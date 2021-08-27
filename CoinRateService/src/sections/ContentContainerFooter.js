import React, { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { isEmptyObject } from '../functions/isEmptyObject';
import Content from '../sections/Content';
import Footer from '../sections/Footer';
  
export default ContentContainerFooter = () => {
    const [coinSelected, setCoinSelected] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState([]);
    const [symbolToRemove, setSymbolToRemove] = useState([]);
    const [stopWatchWork, setStopWatchWork] = useState(false);

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

    removeCoinLabelCallback = (coinIdx, removeSymbol) => {
        setSymbolToRemove([coinIdx, removeSymbol]);
    }

    stopWatchStart = () => {
        setStopWatchWork(true);
    }

    
    return (
        <View>
        <Content parentCallback={this.selectCoinCallback} removableSymbol={symbolToRemove}/>
        <View style={styles.spaceContentFooter}/>
        <Footer coinSelected={coinSelected} selectedCoin={selectedCoin} parentCallback={this.removeCoinLabelCallback} stopWatchStart={this.stopWatchStart}/>   
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
