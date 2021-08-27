import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';
import ContentContainerFooter from '../sections/ContentContainerFooter';
import Header from '../sections/Header';
import Title from '../sections/Title';

const DefaultScreen = () => {
    return (
    <SafeAreaView>
        <View>
            <Header/>
            <View style={styles.spaceHeaderTitle}/>
            <Title/>
            <View style={styles.spaceTitleContent}/>
            <ContentContainerFooter/>
        </View>  
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    spaceHeaderTitle: {
        height: 36,
    },
    spaceTitleContent: {
        height: 16,
    },
});

export default DefaultScreen;