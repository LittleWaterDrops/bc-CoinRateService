import React from 'react';
import {
    LogBox,
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';
import ContainerContentFooter from '../sections/ContainerContentFooter';
import Header from '../sections/Header';
import Title from '../sections/Title';

/**
 * This warning is about react-native-stopwatch package.
 * But it doesn't matter about work.
 * 
 * This screen is main screen of application.
 * Header, title, content, and footer is in here.
 * @author Hangyu Sang
 */
LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.']);

const DefaultScreen = () => {
    return (
    <SafeAreaView>
        <View>
            <Header/>
            <View style={styles.spaceHeaderTitle}/>
            <Title/>
            <View style={styles.spaceTitleContent}/>
            <ContainerContentFooter/>
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