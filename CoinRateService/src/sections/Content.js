import React, { useEffect, useState } from 'react';
import {
    ScrollView, StyleSheet,






    View
} from 'react-native';
import { Rows, Table } from 'react-native-table-component';
import CoinCard from '../components/CoinCard';
import MoreButton from '../components/MoreButton';
import SampleData from '../models/SampleMode.json';


export default Content = () => {
    const [data, setData] = useState([]);

    const tableData = [];

    useEffect(async () => {
        // this is real data
        // const cmcData = await CmcService();

        // this is sample data
        const cmcData = await SampleData;

        setData(cmcData);

    }, []);


if(data.length != 0){
    console.log(data.data.length);
    for(let i = 0; i < 5; i++){
        const rowData = [];
        for(let j = 0; j < 3; j++){
            let idx = j + i * 3
            rowData.push(<CoinCard coinName={data.data[idx].name} coinSymbol={data.data[idx].symbol}
            />);
        }
        tableData.push(rowData);
    }
}

    return (
        <View style={styles.content}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <Table borderStyle={{borderWidth: 16, borderColor: '#FFFFFF'}}>
                            <Rows data={tableData}/>
                    </Table>
                </View>
            </ScrollView>
            <MoreButton/>
        </View>
    );

};
const styles = StyleSheet.create({
    content: {
        height: 560,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    scrollView: {
        width: 760,
    },
    abutton: {
        alignItems: "center",
        backgroundColor: "#F75322",
        padding: 10
    },
    bbutton: {
    alignItems: "center",
    backgroundColor: "#2CF722",
    padding: 10
    },
    cbutton: {
        alignItems: "center",
        backgroundColor: "#2822F7",
        padding: 10
    },
    
});
