import React, { useEffect, useState } from 'react';
import {
    Pressable, StyleSheet,
    Text,
    View
} from 'react-native';

/**
 * This component is stopwatch button.
 * Get init state of stopwatch, and show about.
 * Button is toggled with 'start', 'finish', 'reset' button style.
 * It changes style by state.
 */
export default StopWatchButtion = ({initState, parentCallback}) => {
    /**
     * stopWatchHovered : Check stopwatch button is hovered.
     * stopWatchState : 0 => default, 1 => extraction, 2 => finished.
     *                  0 is 'start', 1 is 'finish', 2 is 'reset'.
     */
    const [stopWatchHovered, setStopWatchHovered] = useState(false);
    const [stopWatchState, setStopWatchState] = useState(0);

    /** This function initialize the state by parameter initState. */
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

    /** This function callback to parent. It pass stopwatch state. */
    useEffect(()=>{
        parentCallback(stopWatchState); 
    },[stopWatchState]);

    /** This function runs when button pressed. Toggle button state. */
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

    /** This function check stopwatch button is hovered in. */
    onPressIn = () => {
        setStopWatchHovered(true);
    };

    /** This function check stopwatch button is hovered in. */
    onPressOut = () => {
        setStopWatchHovered(false);
    };  

    /** This returns text according to state. */
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
