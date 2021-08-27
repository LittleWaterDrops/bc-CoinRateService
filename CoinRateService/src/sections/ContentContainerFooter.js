import React, { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { isEmptyObject } from '../functions/isEmptyObject';
import Content from '../sections/Content';
import Footer from '../sections/Footer';
import ExtractionContent from './ExtractionContent';
  
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

    stopWatchReset = () => {
        setStopWatchWork(false);
    }

    if(stopWatchWork == true){
        return (
            <View>
            <ExtractionContent selectedCoin ={selectedCoin} stopWatchReset={this.stopWatchReset}/>
            <View style={styles.spaceContentFooter}/>
            {/* <Footer coinSelected={coinSelected} selectedCoin={selectedCoin} parentCallback={this.removeCoinLabelCallback} stopWatchStart={this.stopWatchStart}/>    */}
            </View>
       );
    }
    else{
        return (
            <View>
            <Content parentCallback={this.selectCoinCallback} removableSymbol={symbolToRemove}/>
            <View style={styles.spaceContentFooter}/>
            <Footer coinSelected={coinSelected} selectedCoin={selectedCoin} parentCallback={this.removeCoinLabelCallback} stopWatchStart={this.stopWatchStart}/>   
            </View>
       );
    }

};
const styles = StyleSheet.create({
    spaceContentFooter: {
        height: 30,
    },
});