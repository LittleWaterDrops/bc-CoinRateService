import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
  
/**
 * This section shows title and subtitle of project.
 * It located under header section.
 */
export default Title = () => {
    return (
        <View style={styles.title}>
            <Text style={styles.mainTitleFont}>
                크립토 자산 데이터 추출하기
            </Text>
            <Text style={styles.subTitleFont}>
                데이터 추출이 필요한 크립토 자산을 선택 후, 데이터 추출이 가능합니다.
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        height: 72,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 24,
        justifyContent: 'space-between',
    },
    mainTitleFont: {
        fontFamily: 'SpoqaHanSansNeo-Bold',
        fontSize : 32,
        color: '#171F46',
    },
    subTitleFont: {
        fontFamily: 'SpoqaHanSansNeo-Regular',
        fontSize : 16,
        color: '#515774',
    },
});
