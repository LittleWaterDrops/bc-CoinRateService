import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import CoinLabel from '../components/CoinLabel';
  
export default Footer = ({coinSelected, selectedCoin, parentCallback}) => {
    
    // const [removeCoin, setRemoveCoin] = useState([]);

    // removeCoinLabel = (coinIdx, removeSymbol) =>{
    //     setRemoveCoin([coinIdx,removeSymbol]);
    // }

    // useEffect(()=>{
    //     if(!isEmptyObject(removeCoin)){
    //         parentCallback(removeCoin[0], removeCoin[1]);
    //     }
    // },[removeCoin])
        removeCoinLabel = (coinIdx, removeSymbol) =>{
        parentCallback(coinIdx, removeSymbol);
}

    if(coinSelected == true){
        let initialArr = selectedCoin;
        // if(typeof(initialArr) == 'string'){
        //     initialArr = [initialArr];
        // }

        return (
            <View style={styles.footer}>
                <View style={styles.scorllViewBackGround}>
                    <ScrollView style={styles.scrollView}>

                        <View style={styles.coinLabelBox}>

                            {
                                initialArr.map((item)=> {

                                    return (
                                        <CoinLabel key={item[0]} coinIdx={item[0]} symbol={item[1]} parentCallback={this.removeCoinLabel}/>
                                    );
                                })
                            }

                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
    else{
        return null;
    }
};
const styles = StyleSheet.create({
    footer: {
        height: 180,
        flexDirection: 'column',
        backgroundColor: '#DDDDDD',
    },
    container: {
        height: 180,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    scorllViewBackGround: {
        height: 120,
        backgroundColor: '#EEF0FD',
    },
    coinLabelBox: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        flexWrap: 'wrap',
        paddingTop: 8,
    },
    scrollView: {
        flexDirection: 'column',
    },
});
