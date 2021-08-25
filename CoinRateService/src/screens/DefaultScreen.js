import React, { useEffect, useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,

    Text, View
} from 'react-native';

const DefaultScreen = () => {
    const [data, setData] = useState([]);
  
    function getMovies() {
        console.log('hello');
        
    }
  
   useEffect(() => {
    getMovies();
  
  }, []);
  useEffect(() => {
    getMovies();
  
  }, []);
    return (
    //   console.log(JSON.stringify(data)),
    //   console.log(cmcInfo),
    <SafeAreaView>
      <View style={styles.viewContainer}>
          <Image 
            style={styles.logo}
            source={require('CoinRateService/src/assets/images/img_symbol.png')}/>
            <Text style={{fontSize : 100}}>haru</Text>
            <Text style={styles.koreanRegularFont}>haru</Text>
            <Text style={styles.englishRegularFont}>haru</Text>
      </View>
    </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    viewContainer: {
      padding: 23,
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
    logo: {
        width: 22.8,
        height: 34,
    }
  });
  
  export default DefaultScreen;