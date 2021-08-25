import React, { useState } from 'react';
import {
    ScrollView, StyleSheet,






    View
} from 'react-native';
import { Rows, Table } from 'react-native-table-component';
import CoinCard from '../components/CoinCard';

  
export default Content = () => {
    // const [a,b] = useState();
    const [buttonPressed, setButtonPressed] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false);
    
    onPress = () => {
        setButtonPressed(true);
        setButtonHovered(false);
        console.log('pressed');
    };
    onPressIn = () => {
        setButtonHovered(true);
        console.log('hovered');
    };

    const tableData = [[<CoinCard/>,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9]];


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
            <ScrollView>
          <View>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    <Rows data={tableData}/>
              </Table>
          </View>
        </ScrollView>

        </View>
    );

};
const styles = StyleSheet.create({
    content: {
        height: 536,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#7DDBCF'
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
