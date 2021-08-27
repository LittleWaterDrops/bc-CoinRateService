import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
    ScrollView,

    StyleSheet,
    View
} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
// import Cmcservice from '../api/CmcService';
import SelectedCoinLabel from '../components/SelectedCoinLabel';
import StopWatchButton from '../components/StopWatchButton';
import TimeBox from '../components/TimeBox';
import SampleData from '../models/SampleModel.json';
  
export default ExtractionContent = ({selectedCoin, stopWatchReset, parentCallback}) => {
    const [stopWatchStart, setStopWatchStart] = useState(false);
    const [timerReset, setTimerReset] = useState(false);
    const [visited, setVisited] = useState(false);
    const [requestTime, setRequestTime] = useState('');
    const [respondTime, setRespondTime] = useState('');
    const [timeBoxVisible, setTimeBoxVisible] = useState(false);
    const [timer, setTimer] = useState();

    stopWatchFunction = (stopWatchState) =>{

        if(stopWatchState == 1){
            setTimerReset(false);
            setStopWatchStart(true);
            setVisited(true);
            
        }
        else if(stopWatchState == 2){
            setStopWatchStart(false);
        }
        else{
            setTimerReset(true);
            setTimeBoxVisible(false);
            
            if(visited == true){
                stopWatchReset();
                setVisited(false);
            }
        }
    }
    
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

    getTimeData = () =>{
        setRequestTime(moment(moment().valueOf() - 5000).format('YYYY.MM.DD HH:mm:ss.SSS'));   
        setRespondTime(moment().format('YYYY.MM.DD HH:mm:ss.SSS'));
    }


    // 심볼 가격 24h 7d by 5sec -> symbol price percentchange24h percentchange 7d 
    extraction = async () => {
        // this is real data
        // const cmcData = await Cmcservice();

        // this is sample data
        const cmcData = await SampleData;

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
                reset={timerReset}
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
