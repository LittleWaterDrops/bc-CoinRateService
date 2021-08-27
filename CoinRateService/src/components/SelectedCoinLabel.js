import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 * This component is selected coin label.
 * It displayed at Extraction Content. 
 * It is like coin label, but not close button.
 */
export default SelectedCoinLabel = ({symbol}) => {

    return (
        <View style={styles.padding}>
            <View style={styles.defaultLabel}>
                <View style={styles.labelBox}>
                <Text style={styles.defaultTextFont}>{symbol}</Text>
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
