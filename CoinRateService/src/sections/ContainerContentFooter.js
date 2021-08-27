import React, { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { isEmptyObject } from '../functions/isEmptyObject';
import Content from './Content';
import ExtractionContent from './ExtractionContent';
import ExtractionFooter from './ExtractionFooter';
import Footer from './Footer';

/** 
 * This section is the main section of default screen.
 * It handle content and footer of default, extraction both.
 * First, it display default of content and footer, then display extraction of them after stopwatech start.
 * All of selected coin, removable coin, stopwatch state, extracted coin list is saved in here.
 */  
export default ContainerContentFooter = () => {
    /**
     * coinSelected : Check if over one of coin selected by coin card table.
     * selectedCoin : List of selected coin by coin card table.
     *                One Coin has data of index, name, symbol, price, percent change of 24H & 7D.
     * symbolToRemove : List of data to remove coin. One Coin has data of index and symbol.
     * stopWatchWork :  Check stopwatch works. 
     * extractedCoin :  List of coin data to extract. One Coin has data of index, name, symbol, price, percent change of 24H & 7D.
     */
    const [coinSelected, setCoinSelected] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState([]);
    const [symbolToRemove, setSymbolToRemove] = useState([]);
    const [stopWatchWork, setStopWatchWork] = useState(false);
    const [extractedCoin, setExtractedCoin] = useState([]);

    /** Callback by Content. If selected coin is not empty, set coin selected true and save coin list. */
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

    /** Callback by Footer. If user close label of coin, set remove symbol.  */
    removeCoinLabelCallback = (coinIdx, removeSymbol) => {
        setSymbolToRemove([coinIdx, removeSymbol]);
    }

    /** Callback by Footer. If stopwatch pressed, navigate page to extraction and start stopwatch with extraction. */
    stopWatchStart = () => {
        setStopWatchWork(true);
    }

    /** Callback by ExtractionContent. If stopwatch reset, init stopwater work, extracted coin, and removable coin. */
    stopWatchReset = () => {
        setStopWatchWork(false);
        setExtractedCoin([]);
        setSymbolToRemove([]);
    }

    /** Callback by ExtractionContent and Extraction Footer. Pass the coin list to extract. */
    extractedCoinList = (coinList) =>{
        setExtractedCoin(coinList);
    }


    if(stopWatchWork == true){
        return (
            <View>
            <ExtractionContent selectedCoin ={selectedCoin} resetStopWatch={this.stopWatchReset} parentCallback={this.extractedCoinList}/>
            <View style={styles.spaceContentFooter}/>
            <ExtractionFooter extractedCoinList={extractedCoin}/>   
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
