import {StyleSheet} from "react-native";


export default  styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        elevation: 5,
        margin: 5,
        backgroundColor: '#dcdcdc',
        borderRadius : 5
    },

    txtNames: {
        fontSize: 18,
        color: "#000000",
        marginLeft: 10,
        flex:6,
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'dastnevis'
    },
    btnPresent:{
        backgroundColor: "green",
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        borderRadius: 15,
        elevation: 3
    },
    txtPresent: {
        color: "#ffffff",
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'dastnevis'
    },
    btnAbsent:{
        backgroundColor: "red",
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        borderRadius: 15,
        elevation: 3
    },
    txtAbsent: {
        color: "#ffffff",
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'dastnevis'
    },
});
