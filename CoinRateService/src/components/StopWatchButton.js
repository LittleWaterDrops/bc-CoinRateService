import React, { useEffect, useState } from 'react';
import {
    Pressable, StyleSheet,
    Text,

    View
} from 'react-native';


export default StopWatchButtion = ({initState, parentCallback}) => {
    const [stopWatchHovered, setStopWatchHovered] = useState(false);

    //stopWatchState 0 : default, 1 : extraction, 2 : finished
    const [stopWatchState, setStopWatchState] = useState(0);

    useEffect(()=>{
        switch (initState) {
            case 0:
                setStopWatchState(0);                
                break;
            case 1:
                setStopWatchState(1);
                break;
            case 2:
                setStopWatchState(2);
                break;
            default:
                break;
        }    
    },[initState]);

    useEffect(()=>{
        parentCallback(stopWatchState); 
    },[stopWatchState]);

    onPress = () => {
        setStopWatchHovered(false);
        switch (stopWatchState) {
            case 0:
                setStopWatchState(1);                
                break;
            case 1:
                setStopWatchState(2);
                break;
            case 2:
                setStopWatchState(0);
                break;
            default:
                break;
        }
    };
    onPressIn = () => {
        setStopWatchHovered(true);
    };

    onPressOut = () => {
        setStopWatchHovered(false);
    };  


    const stopWatchText = () =>{
        if(stopWatchState == 1){
            return 'Finish';
        }
        else if (stopWatchState == 2){
            return 'Reset';
        }
        else{
            return 'Start';
        }
    }

    return (
        <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{borderRadius: 4}}
        >            

                <View style={
                    stopWatchHovered ? 
                    (stopWatchState == 2 ? styles.resetHoveredBox : styles.defaultHoveredBox)
                    : (stopWatchState == 2 ? styles.resetStopWatchBox : styles.defaultStopWatchBox)}>

                <Text style={styles.stopWatchBoxText}>
                    {stopWatchText()}
                </Text>
                </View>
        </Pressable>

    );
};


const styles = StyleSheet.create({
    defaultStopWatchBox: {
        width: 106,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5A41F5',
        borderRadius: 4,
    },
    defaultHoveredBox: {
        width: 106,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3F23EB',
        borderRadius: 4,
    },
    resetStopWatchBox: {
        width: 106,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#515774',
        borderRadius: 4,
    },
    resetHoveredBox: {
        width: 106,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3A4162',
        borderRadius: 4,
    },
    stopWatchBoxText: {
        fontFamily: 'Inter-Regular',
        fontSize: 18,
        color: '#FFFFFF',
    },
});
