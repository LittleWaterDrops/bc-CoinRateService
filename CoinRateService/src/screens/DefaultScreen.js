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
    spaceContentFooter: {
        height: 30,
    },
    headerLogoFont: {
        fontFamily: 'Inter-Bold',
        fontSize: 30,
    },
    koreanRegularFont: {
        fontFamily: 'SpoqaHanSansNeo-Regular',
        fontSize : 100,
    },
    englishRegularFont: {
        fontFamily: 'Inter-Regular',
        fontSize : 100,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default DefaultScreen;