import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
    ScrollView,

    StyleSheet,
    View
} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import Cmcservice from '../api/CmcService';
import SelectedCoinLabel from '../components/SelectedCoinLabel';
import StopWatchButton from '../components/StopWatchButton';
import TimeBox from '../components/TimeBox';
// import SampleData from '../models/SampleModel.json';
  
/** 
 * This Section is extract data of selected coins.
 * If stopwatch starts, this section will activate, and stopwatch with timer will run.
 * Extracted data of coin is symbol, price with KRW, percent change of 24H, percent change of 7D.
 * Request Time and Respond Time is displayed. This updated by 5 seconds. Extracted data update accordingly.
 * If user press Finished button, button state change to finish, stopwatch stop, and display reset button.
 * If user press Reset button, Extraction Content and Extraction Footer navigate to Content and Footer, which is default.
 * If extracted data updated, it pass data to Extraction Footer, and show them by list.
 * It also display selected coin labels without close button.
 * This section is related with Extraction Footer.
 */
export default ExtractionContent = ({selectedCoin, resetStopWatch, parentCallback}) => {
    /**
     * stopWatchStart : Check stopwatch to start or stop.
     * stopWatchReset : Check stopwatch to reset.
     * visited : Check this section was visited. To prevent this run many times.
     * requestTime : Time data of request. This will display on TimBox.
     * respondTime : Time data of respond. This will display on TimBox.
     * timeBoxVisible : Check to timeBox visible. If 5 seconds passed, timeBox will be shown.
     * timer : Timer that update 5 seconds. By using this, user can update data of extraction and respond time.
     */
    const [stopWatchStart, setStopWatchStart] = useState(false);
    const [stopWatchReset, setStopWatchReset] = useState(false);
    const [visited, setVisited] = useState(false);
    const [requestTime, setRequestTime] = useState('');
    const [respondTime, setRespondTime] = useState('');
    const [timeBoxVisible, setTimeBoxVisible] = useState(false);
    const [timer, setTimer] = useState();

    /** 
     * This is callback by stopwatch button. This state the stopwatch state.
     * State of 1 is start, 2 is finish, 3 is reset.
     */
    stopWatchFunction = (stopWatchState) =>{
        if(stopWatchState == 1){
            setStopWatchReset(false);
            setStopWatchStart(true);
            setVisited(true);
            
        }
        else if(stopWatchState == 2){
            setStopWatchStart(false);
        }
        else{
            setStopWatchReset(true);
            setTimeBoxVisible(false);
            
            if(visited == true){
                resetStopWatch();
                setVisited(false);
            }
        }
    }
    
    /** This is work when stopwatch running. Timer activated, getting respond data and extraction runned. */
    useEffect(()=>{
        if(stopWatchStart == true){

            setTimer(setInterval(() => {
                setTimeBoxVisible(true);
                getTimeData();
                extraction();
            }, 5000));
        }
        else{
            clearInterval(timer);
        }
    },[stopWatchStart]);

    /** get respond and request time data. Because reqest and respond is 5 second different, request is minus 5 sec of respond. */
    getTimeData = () =>{
        setRequestTime(moment(moment().valueOf() - 5000).format('YYYY.MM.DD HH:mm:ss.SSS'));   
        setRespondTime(moment().format('YYYY.MM.DD HH:mm:ss.SSS'));
    }


    // 심볼 가격 24h 7d by 5sec -> symbol price percentchange24h percentchange 7d 
    /**
     * This function extract coin data.
     * To use Sample data, remove comment of Sample data and remove comment of import 'SampleData.json'.
     * One Coin has data of index, name, symbol, price, percent change of 24H & 7D.
     * If data is extracted, array of index, symbol, price, percent of 24H & 7D callback to parent.
     */
    extraction = async () => {
        // this is real data
        const cmcData = await Cmcservice();

        // this is sample data
        // const cmcData = await SampleData;

        var extractedCoins = [];

        selectedCoin.forEach(coin => {
            coinIdx = coin[0];
            coinSymbol = cmcData.data[coinIdx].symbol;
            coinPrice = cmcData.data[coinIdx].quote.KRW.price;
            coinRate24H = cmcData.data[coinIdx].quote.KRW.percent_change_24h;
            coinRate7D = cmcData.data[coinIdx].quote.KRW.percent_change_7d

            const extractedCoinData = [coinIdx, coinSymbol, coinPrice, coinRate24H, coinRate7D];
            extractedCoins.push(extractedCoinData);
        });
        parentCallback(extractedCoins);
    }

    let initialArr = selectedCoin;

    return (
        <View style={styles.extractionContent}>
            <View style={styles.scorllViewSection}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.coinLabelBox}>
                        {
                            initialArr.map((item)=> {
                                return (
                                    <SelectedCoinLabel key={item[0]} symbol={item[1]}/>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>
            <View style={styles.stopWatchSection}>
                <Stopwatch laps msecs start={stopWatchStart}
                reset={stopWatchReset}
                options={options}
                />
                <StopWatchButton initState={1} parentCallback={this.stopWatchFunction}/>
            </View>
            <TimeBox visible={timeBoxVisible} timeData={[requestTime,respondTime]}/>
        </View>
    );
};

const options = {
    container: {
      backgroundColor: '#FFFFFF',

    },
    text: {
      fontSize: 28,
      color: '#5A41F5',
      marginLeft: 7,
    }
  };
  
const styles = StyleSheet.create({
    extractionContent: {
        height: 280,
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
