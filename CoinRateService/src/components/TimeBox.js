import React from 'react';
import {

    StyleSheet, Text,


    View
} from 'react-native';

  
export default TimeBox = ({visible, timeData}) => {
    if(visible == true){
        return (

            <View style={styles.timeBoxSection}>

                <View style={styles.timeBox}>
                    <View style={styles.timeTextBox}>
                        <Text style={styles.timeText}> Request Time </Text>
                        <Text style={styles.timeText}> {timeData[0]} </Text>
                    </View>
                    
                    <View style={styles.timeTextBox}>
                        <Text style={styles.timeText}> Respond Time </Text>
                        <Text style={styles.timeText}> {timeData[1]} </Text>
                    </View>
                </View>
            </View>
        );
    }
    else{
        return null;
    }
};

  
const styles = StyleSheet.create({
    timeBoxSection: {
        height: 76,
        alignItems: 'center',
    },
    timeBox: {
        width: 720,
        height: 76,
        flexDirection: 'column',
        backgroundColor: '#F7F8FF',
        justifyContent: 'center',
    },
    timeTextBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
    },    
    timeText: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: '#3A4162',
        paddingVertical: 3,
    },
});
