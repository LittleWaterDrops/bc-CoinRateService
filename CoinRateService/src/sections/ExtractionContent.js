import moment from 'moment';
import React, { useState } from 'react';
import {
    ScrollView,

    StyleSheet,
    View
} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import SelectedCoinLabel from '../components/SelectedCoinLabel';
import StopWatchButton from '../components/StopWatchButton';
import TimeBox from '../components/TimeBox';

  
export default ExtractionContent = ({selectedCoin, stopWatchReset}) => {
    const [timerStart, setTimerStart] = useState(false);
    const [timerReset, setTimerReset] = useState(false);
    const [visited, setVisited] = useState(false);
    const [requestTime, setRequestTime] = useState('');
    const [respondTime, setRespondTime] = useState('');
    const [timeBoxVisible, setTimeBoxVisible] = useState(false);

    stopWatchFunction = (stopWatchState) =>{
            
        if(stopWatchState == 1){
            setTimerReset(false);
            setTimerStart(true);
            setVisited(true);
            setRequestTime(moment().format('YYYY.MM.DD HH:mm:ss.SSS'));
        }
        else if(stopWatchState == 2){
            setTimerStart(false);
            setRespondTime(moment().format('YYYY.MM.DD HH:mm:ss.SSS'));
            setTimeBoxVisible(true);
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
                <Stopwatch laps start={timerStart}
                reset={timerReset}
                options={options}
                getTime={this.getTime} 
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
        height: 210,
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
