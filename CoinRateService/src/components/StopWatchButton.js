import React, { useState } from 'react';
import {
    Pressable, StyleSheet,
    Text,

    View
} from 'react-native';


export default StopWatchButtion = ({parentCallback}) => {
    const [stopWatchPressed, setStopWatchPressed] = useState(false);
    const [stopWatchHovered, setStopWatchHovered] = useState(false);
    
    onPress = () => {
        setStopWatchPressed(true);
        setStopWatchHovered(false);
        parentCallback(); 

        console.log('pressed');
    };
    onPressIn = () => {
        setStopWatchHovered(true);
        console.log('hoverd in');
    };

    onPressOut = () => {
        setStopWatchHovered(false);
        console.log('hovered out');
    };

    return (
        <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{borderRadius: 4}}
        >            

                <View style={stopWatchHovered ? styles.hoveredBox : styles.stopWatchBox}>

                <Text style={styles.stopWatchBoxText}>
                    Start
                </Text>
                </View>
        </Pressable>

    );
};

const styles = StyleSheet.create({
    stopWatchBox: {
        width: 106,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5A41F5',
        borderRadius: 4,
    },
    hoveredBox: {
        width: 106,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3F23EB',
        borderRadius: 4,
    },
    stopWatchBoxText: {
        fontFamily: 'Inter-Regular',
        fontSize: 18,
        color: '#FFFFFF',
    },
});
