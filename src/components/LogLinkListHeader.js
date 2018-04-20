import  React , {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class LogLinkListHeader extends Component {
    render() {
        return (
            <View style={styles.headerView}>
                <Text style={styles.txtHeader}>گزارش وضعیت</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#2d3436' ,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,

    },
    txtHeader : {
        // fontFamily: 'irsans',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});