import React, { useState } from 'react';
import {
    Pressable, StyleSheet,
    Text,

    View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default CoinLabel = ({coinIdx, symbol, parentCallback}) => {
    const [labelPressed, setLabelPressed] = useState(false);
    const [labelHovered, setLabelHovered] = useState(false);
    
    onPress = () => {
        setLabelPressed(true);
        setLabelHovered(false);
        parentCallback(coinIdx, symbol); 
    };
    onPressIn = () => {
        setLabelHovered(true);
    };
    onPressOut = () => {
        setLabelHovered(false);
    };

    return (
        
        <View style={styles.padding}>
            <View style={styles.defaultLabel}>
            
                <View style={styles.labelBox}>

                <Text style={styles.defaultTextFont}>{symbol}</Text>

                    <Pressable
                    onPress={onPress}
                    onPressIn={onPressIn}
                    onPressOut={onPressOut}
                    style={styles.closeBox}
                    >
                        <Text>
                        <Icon name="close" size={15} color={labelHovered ? '#72778E': '#A6AEBA'} />
                        </Text>

                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    padding: {
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    labelBox: {
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    closeBox: {
        width: 24, 
        height: 24, 
        alignItems:'center', 
        justifyContent: 'center',
    },
    defaultTextFont: {
        fontFamily: 'Inter-Bold',
        fontSize : 14,
        color: '#5A41F5',
        paddingHorizontal: 5,
    },
    defaultLabel: {
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#E1E4FC',
    },
});
