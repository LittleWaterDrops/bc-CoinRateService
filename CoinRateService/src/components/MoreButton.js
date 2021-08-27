import React, { useState } from 'react';
import {
    Pressable, StyleSheet,
    Text,

    View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

/** 
 * This component is more button.
 * Get current and max page index, and show it. 
 * button can hover and can press.
 * If hovered actived, label's style is change.
 * If button pressed, current page index is increase before max page index.
 */
export default MoreButton = ({curPageIdx, maxPageIdx, parentCallback}) => {
    /** moreHovered : Check if more button is hovered. */
    const [moreHovered, setMoreHovered] = useState(false);

    /** This function runs when more button is pressed. Increase current index. */
    onPress = () => {
        setMoreHovered(false);
        parentCallback(); 
    };
    
    /** This function check more button is hovered in. */
    onPressIn = () => {
        setMoreHovered(true);
    };

    /** This function check more button is hovered in. */
    onPressOut = () => {
        setMoreHovered(false);
    };

    return (
        <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{borderRadius: 4}}
        >
            <View style={styles.defaultButton}>
                <View style={styles.buttonBox}>
                    <Text style={moreHovered ? styles.hoverTextFont : styles.defaultTextFont}>더보기({curPageIdx}/{maxPageIdx})</Text>
                    <View>
                        <Text>
                        <Icon name="down" size={15} color={moreHovered ? '#72778E': '#A6AEBA'} />
                        </Text>
                    </View>
                </View>
            </View>

        </Pressable>

    );
};

const styles = StyleSheet.create({
    buttonBox: {
        height: 48,
        width: 141,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    defaultTextFont: {
        fontFamily: 'SpoqaHanSansNeo-Regular',
        fontSize : 14,
        color: '#72778E',
    },
    hoverTextFont: {
        fontFamily: 'SpoqaHanSansNeo-Regular',
        fontSize : 14,
        color: '#515774',
    },
    defaultButton: {
        alignItems: "center",
        backgroundColor: "#F6F7F8",
        borderRadius: 4,
    },
});
