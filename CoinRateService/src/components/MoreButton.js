import React, { useState } from 'react';
import {
    Pressable, StyleSheet,
    Text,

    View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default MoreButton = ({curPageIdx, maxPageIdx, parentCallback}) => {
    const [morePressed, setMorePressed] = useState(false);
    const [moreHovered, setMoreHovered] = useState(false);
    
    onPress = () => {
        setMorePressed(true);
        setMoreHovered(false);
        parentCallback(); 
    };
    onPressIn = () => {
        setMoreHovered(true);
    };

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
                        <View>
                            <Text>
                            <Icon name="down" size={15} color={moreHovered ? '#72778E': '#A6AEBA'} />
                            </Text>
                        </View> 
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
