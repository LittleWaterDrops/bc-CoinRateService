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
    const [pageIdx, setPageIdx] = useState(1);

    const tableData = [];
    let maxPageIdx = 0;

    pageIdxCallback = () => {
        if(pageIdx + 1 <= maxPageIdx){
            setPageIdx(pageIdx => pageIdx + 1);
        }
    }

    useEffect(async () => {
        // this is real data
        // const cmcData = await CmcService();

        // this is sample data
        const cmcData = await SampleData;

        setData(cmcData);

    }, []);




    if(!isEmptyObject(data)){
        maxPageIdx = Math.ceil(data.data.length / 15);

        for(let i = 0; i < 5 * (pageIdx == maxPageIdx ? (pageIdx - 1) : pageIdx); i++){
            const rowData = [];
            for(let j = 0; j < 3; j++){
                let idx = j + i * 3
                rowData.push(<CoinCard coinName={data.data[idx].name} coinSymbol={data.data[idx].symbol}
                />);
            }
            tableData.push(rowData);
        }   
        if(pageIdx == maxPageIdx){ 
            const remainedCoin = data.data.length - 15 * (pageIdx - 1);
            const remainedColumn = Math.ceil(remainedCoin / 3);
            const reaminedRow = remainedCoin - (remainedColumn - 1) * 3;

            for(let k = 0; k < remainedColumn; k++){
                const rowData = [];

                if(k == remainedColumn - 1){
                    for(m = 0; m < reaminedRow; m ++){
                        let idx = m + k * 3 + 15 * (pageIdx - 1);
                        rowData.push(<CoinCard coinName={data.data[idx].name} coinSymbol={data.data[idx].symbol}
                        />); 
                    }
                    for(m = reaminedRow; m < 3; m ++){
                        rowData.push(null); 
                    }
                }
                else {
                    for(let l = 0; l < 3; l++){
                        let idx = l + k * 3 + 15 * (pageIdx - 1);
                        rowData.push(<CoinCard coinName={data.data[idx].name} coinSymbol={data.data[idx].symbol}
                        />);
                    }
                }
                
                tableData.push(rowData);
            }  
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
            <MoreButton curPageIdx={pageIdx} maxPageIdx={maxPageIdx} parentCallback={this.pageIdxCallback}/>
        </View>
    );
};

const isEmptyObject = (data) => {
    if(Object.keys(data).length == 0){
        return true;
    }
    else{
        return false;
    }
}

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
