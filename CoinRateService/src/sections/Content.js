import React, { useState } from 'react';
import {
    ScrollView, StyleSheet,






    View
} from 'react-native';
import { Rows, Table } from 'react-native-table-component';
import CoinCard from '../components/CoinCard';
import MoreButton from '../components/MoreButton';

  
export default Content = () => {
    // const [a,b] = useState();
    const [buttonPressed, setButtonPressed] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false);


    const tableData = [];
    onPress = () => {
        setmorePressed(true);
        setmoreHovered(false);
        console.log('pressed');
    };
    onPressIn = () => {
        setmoreHovered(true);
        console.log('hovered');
    };

    for(let i = 0; i < 5; i++){
        const rowData = [];
        for(let j = 0; j < 3; j++){
            rowData.push(<CoinCard/>);
        }
        tableData.push(rowData);
    }

    // const tableData = [[<CoinCard/>,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9]];


    return (
        <View style={styles.content}>
            {/* <TouchableHighlight
            onPress={onPress}
            onPressIn={onPressIn}
            >
                <View style={buttonHovered? styles.abutton : buttonPressed? styles.bbutton : styles.cbutton}>
                    <Text>Text</Text>
                </View>
            </TouchableHighlight> */}
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
