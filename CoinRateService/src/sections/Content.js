import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import { Rows, Table } from 'react-native-table-component';
import Cmcservice from '../api/CmcService';
import CoinCard from '../components/CoinCard';
import MoreButton from '../components/MoreButton';
import { isEmptyObject } from '../functions/isEmptyObject';
// import SampleData from '../models/SampleModel.json';

/**
 * This section shows coin card on the center of screen.
 * Default, we can show 100 of coin, but also we can increase coins by CmcService.js.
 * At first, 15 coins show, but by using more button, we can see maximum 100 coins.
 * Using more button after clicked card, that data is saved. So we can continue the selecting cards.
 * Furthermore After select coins, footer been showed coin label and extract start button with we selected.
 * If we start extract, this section will change to Extraction Content Section.
 * It located under the title. It is related by 'Footer.js'. These two section is default display before stopwatch able.
 */
export default Content = ({parentCallback, removableSymbol}) => {
    /**
     * data : Initial data of 100 coins. To see details, please check '../models/SampleModel.json'.
     * selectedCoin : List that user select by coin cards. One coin has index and symbol.
     * pageIdx : Current page index of coin card. Initial will be decare by 0, but useEfftect, it changes by 1.
     * tableData : Data List to be coin card.
     * maxPage : Max page index of data.
     * initail : To check that data is initialized. Also, prevent duplicate to call data many times at sec.
     */
    const [data, setData] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState([]);
    const [pageIdx, setPageIdx] = useState(0);
    const [tableData, setTableData] = useState([]);
    const [maxPage, setMaxPage] = useState(0);
    const [inital, setInitial] = useState(false);
    
    /** This is check to remove coin by coin label, and change selected coin card to default. */
    useEffect(()=>{
        if(!isEmptyObject(removableSymbol)){
            selectCoinCallback(removableSymbol[1],removableSymbol[0],false);           
        }
    },[removableSymbol])

    /** This is callback by morebutton. If morebutton is clicked, increase current page index before max page. */
    pageIdxCallback = () => {
        if(pageIdx + 1 <= maxPage){
            setPageIdx(pageIdx => pageIdx + 1);
        }
    }
    
    /** This is function to change card selected. */
    cardToSelect = (columnNumber, rowNumber, selectedCoinIdx) =>{
        tableData[columnNumber][rowNumber] = <CoinCard 
        coinName={tableData[columnNumber][rowNumber].props.coinName} 
        coinSymbol={tableData[columnNumber][rowNumber].props.coinSymbol}
        coinIdx={selectedCoinIdx}
        cardSelected={true}
        parentCallback={this.selectCoinCallback}
        />;
    }

    /** This is function to change card default. */
    cardToDefault = (columnNumber, rowNumber, selectedCoinIdx) =>{
        tableData[columnNumber][rowNumber] = <CoinCard 
        coinName={tableData[columnNumber][rowNumber].props.coinName} 
        coinSymbol={tableData[columnNumber][rowNumber].props.coinSymbol}
        coinIdx={selectedCoinIdx}
        cardSelected={false}
        parentCallback={this.selectCoinCallback}
        />;
    }

    /** This is callback by coin card. If card is clicked, check it's index of data and change card's state. */
    selectCoinCallback = (selectedCoinSymbol, selectedCoinIdx, buttonPressed) => {
        const columnNumber = Math.floor(selectedCoinIdx/3);
        const rowNumber = selectedCoinIdx % 3;

        if(buttonPressed == true){
            cardToSelect(columnNumber,rowNumber,selectedCoinIdx);

            setSelectedCoin(selectedCoin => selectedCoin.concat([[selectedCoinIdx, selectedCoinSymbol]]));
        }
        else{
            cardToDefault(columnNumber,rowNumber,selectedCoinIdx);
            
            setSelectedCoin(selectedCoin => selectedCoin.filter(function(selectedCoin) { 
                return JSON.stringify(selectedCoin) != JSON.stringify([selectedCoinIdx, selectedCoinSymbol]);
            }));
        }


    }

    /** This is parentCallback. It gives selected coin list to ContainerContentFooter Section */
    useEffect(() => {
        let copyedArray = [...selectedCoin];

        parentCallback(copyedArray);
    }, [selectedCoin]);

    /** This is initializing data of coins. Check if data is empty and initial is false.
     *  Set current page index 1, and set max page index by division 15.
     *  To use sample data, remove comment of sampledata and import of 'SampleData.json'.
     */
    useEffect(async () => {

        if(isEmptyObject(data) && inital == false){
            // this is real data
            const cmcData = await Cmcservice();

            // this is sample data
            // const cmcData = await SampleData;

            setData(cmcData);

            let maxPageIdx = Math.ceil(cmcData.data.length / 15);
            setMaxPage(maxPageIdx);
            setPageIdx(1);
            setInitial(true);
        }
        else{
            setInitial(false);
        }
    }, [data]);

    /** This is initializing table data of coin card. Check current page and push default card suitably. */
    useEffect(() => {
        const tableCell = [];

        if(!isEmptyObject(data)){

            for(let i = 5 * (pageIdx - 1); i < 5 * (pageIdx == maxPage ? (pageIdx - 1) : pageIdx); i++){
                const rowData = [];
                for(let j = 0; j < 3; j++){
                    let idx = j + i * 3
                    rowData.push(<CoinCard 
                        coinName={data.data[idx].name} 
                        coinSymbol={data.data[idx].symbol}
                        coinIdx={idx}
                        cardSelected={false}
                        parentCallback={this.selectCoinCallback}
                        />
                    );
                }
                tableCell.push(rowData);
            }   
            if(pageIdx == maxPage){ 
                const remainedCoin = data.data.length - 15 * (pageIdx - 1);
                const remainedColumn = Math.ceil(remainedCoin / 3);
                const reaminedRow = remainedCoin - (remainedColumn - 1) * 3;

                for(let k = 0; k < remainedColumn; k++){
                    const rowData = [];

                    if(k == remainedColumn - 1){
                        for(m = 0; m < reaminedRow; m ++){
                            let idx = m + k * 3 + 15 * (pageIdx - 1);
                            rowData.push(<CoinCard 
                                coinName={data.data[idx].name} 
                                coinSymbol={data.data[idx].symbol}
                                coinIdx={idx}
                                cardSelected={false}
                                parentCallback={this.selectCoinCallback}
                                />
                            ); 
                        }
                        for(m = reaminedRow; m < 3; m ++){
                            rowData.push(null); 
                        }
                    }
                    else {
                        for(let l = 0; l < 3; l++){
                            let idx = l + k * 3 + 15 * (pageIdx - 1);
                            rowData.push(<CoinCard 
                                coinName={data.data[idx].name} 
                                coinSymbol={data.data[idx].symbol}
                                coinIdx={idx}
                                cardSelected={false}
                                parentCallback={this.selectCoinCallback}
                                />
                            );
                        }
                    }
                    tableCell.push(rowData);
                }  
            }
            setTableData(tableData.concat(tableCell));
        }
    }, [pageIdx]);

    return (
        <View style={styles.content}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <Table borderStyle={{borderWidth: 16, borderColor: '#FFFFFF'}}>
                            <Rows data={tableData}/>
                    </Table>
                </View>
            </ScrollView>
            <MoreButton curPageIdx={pageIdx} maxPageIdx={maxPage} parentCallback={this.pageIdxCallback}/>
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
