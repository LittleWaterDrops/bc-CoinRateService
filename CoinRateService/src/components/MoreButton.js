import React, { useState } from 'react';
import {
    Pressable, StyleSheet,
    Text,

    View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default MoreButton = () => {
    const [morePressed, setmorePressed] = useState(false);
    const [moreHovered, setmoreHovered] = useState(false);
    
    onPress = () => {
        setmorePressed(true);
        setmoreHovered(false);
        console.log('pressed');
    };
    onPressIn = () => {
        setmoreHovered(true);
        console.log('hovered');
    };

    return (
        <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        style={{borderRadius: 4}}
        >
            <View style={moreHovered ? styles.hoverButton : styles.defaultButton}>
            
                <View style={styles.buttonBox}>

                    <Text style={moreHovered ? styles.hoverTextFont : styles.defaultTextFont}>더보기(1/32)</Text>

                    <View>
                        <View style={moreHovered ? styles.hoverIcon : styles.defaultIcon}>
                            <Text>
                            <Icon name="down" size={15} color={moreHovered ? '#A6AEBA': '#72778E'} />
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
    hoverButton: {
        alignItems: "center",
        backgroundColor: "#F6F7F8",
        borderRadius: 4,
    },
});
