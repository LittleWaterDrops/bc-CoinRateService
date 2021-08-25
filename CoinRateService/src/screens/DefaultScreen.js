import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';

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
        <Foo/>
    </SafeAreaView>
    );
};

const Foo = () => {
    return (
        <View>
            <Header/>
            <Title/>
        </View>     
    );
}
const styles = StyleSheet.create({
    viewContainer: {
        padding: 23,
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