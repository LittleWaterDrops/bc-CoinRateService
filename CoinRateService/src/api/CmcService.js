import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';
import CmcModel from '../models/CmcModel';

const X_CMC_PRO_API_KEY = '874a5427-138c-4c43-9a5b-b03d97f79b62';


//   const Convert = require("./file");
//
//   const cmcInfo = Convert.toCmcInfo(json);

const DefaultScreen = () => {
    const [data, setData] = useState([]);
  
    const getMovies = async () => {
      try {
       const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=1',{
         method: 'GET',
         headers:{
          'X-CMC_PRO_API_KEY': X_CMC_PRO_API_KEY,
          Accept: 'application/json',
          'Accept-Encoding': 'deflate, gzip',
         },
       });
       const json = await response.json();
       setData(json);
   const cmcInfo = CmcModel.cmcInfoToJson(json);
   console.log(cmcInfo);

  
     } catch (error) {
       console.error(error);
     }
   }
  
   useEffect(() => {
    getMovies();
  
  }, []);
    return (
    //   console.log(JSON.stringify(data)),
    //   console.log(cmcInfo),
      <SafeAreaView>
  <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{data}</Text>
            )}
          />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
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