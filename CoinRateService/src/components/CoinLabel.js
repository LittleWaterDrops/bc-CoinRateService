import React, { useState } from 'react';
import {
    Pressable, StyleSheet,
    Text,

    View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

/** 
 * This component is coin label. 
 * Get index and symbol of coin, and display by label.
 * Label can hovered, close icon can pressed.
 * If hovered actived, label's style is change.
 * If close pressed, label is removed and coin card sets to default.
 */
export default CoinLabel = ({coinIdx, symbol, parentCallback}) => {
    /** labelHoverd : Check if label is hovered. */
    const [labelHovered, setLabelHovered] = useState(false);
    
    /** This function runs when label closed is pressed. Remove label and set coin card to default. */
    onPress = () => {
        setLabelHovered(false);
        parentCallback(coinIdx, symbol); 
    };

    /** This function check label is hovered in. */
    onPressIn = () => {
        setLabelHovered(true);
    };

    /** This function check label is hovered out. */
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
