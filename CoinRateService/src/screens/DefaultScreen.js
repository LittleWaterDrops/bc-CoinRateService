import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';
import Content from '../sections/Content';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Title from '../sections/Title';

const DefaultScreen = () => {
    const [data, setData] = useState([]);
  
    function getMovies() {
        console.log('hello');
        
    }
  
   useEffect(() => {
    getMovies();
  
  }, []);
    return (
    //   console.log(JSON.stringify(data)),
    //   console.log(cmcInfo),
    <SafeAreaView>
        <View>
            <Header/>
            <View style={styles.spaceHeaderTitle}/>
            <Title/>
            <View style={styles.spaceTitleContent}/>
            <Content/>
            <View style={styles.spaceContentFooter}/>
            <Footer/>
        </View>  
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    spaceHeaderTitle: {
        height: 56,
    },
    spaceTitleContent: {
        height: 40,
    },
    spaceContentFooter: {
        height: 40,
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