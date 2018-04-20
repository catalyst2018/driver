import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    gradiant: {
        flex:1
    },
    container:{
        flex: 1,
        // backgroundColor: '#2980b9',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    loginbox:{
        backgroundColor: 'white',
        flex : 1,
        marginRight : 50,
        marginLeft : 50,
        borderRadius : 5,
        elevation : 2,
        shadowColor : 'black' ,
        shadowOffset : { width : 0 , height: 2},
        shadowOpacity : .1,
        paddingBottom:20
    },
    loginTitle:{
        fontFamily:'IRANsans',
        margin: 2,
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10
    },
    inputGroups:{
        margin: 5,
        marginRight:20,
        marginLeft: 20,
        paddingBottom:10
    },
    lableText:{
        fontFamily:'IRANsans',
        textAlign:'left',
        fontSize: 15,
        marginBottom:10,
        color:'#5256c9',
    },
    Inputtext:{
        fontFamily:'IRANsans',
        textAlign:'left',
        borderColor:'rgba(0,0,0,0.1)',
        borderWidth:1,
        padding:10,
        borderRadius: 5,
        height:40
    },
    loginbutton:{
        marginRight: 50,
        marginLeft: 50,
        backgroundColor: '#426bd7',
        padding:10,
        borderRadius: 20,
        marginTop:15,
        marginBottom:15,
        elevation:2,
        shadowColor: 'black',
        shadowOffset: {width:0 ,height:2 },
        shadowOpacity: .1,
        overflow: 'hidden'
    },
    loginbuttontext:{
        fontFamily:'IRANsans',
        color:'white',
        textAlign: 'center',
    },
    forgetpasswordtext:{
        fontFamily:'IRANsans',
        textAlign: 'center',
        fontSize: 15,
        marginBottom:10,
        color:'#5256c9',
    },
    error: {
        fontSize: 13,
        color: 'red',
        fontFamily:'IRANsans',
        textAlign: 'left',
        marginTop: 5
    }

});

export default styles;
