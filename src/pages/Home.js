import React, { Component } from 'react';
import {
    Text,
    View,
    AsyncStorage,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Attendance from "./../components/Attendance";

const GET_PEOPLE_SERVER_ADDRESS = 'http://matinzd.com/api/v2/driverShowStudents.php?apitoken=';

export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        this.getPeople()
    }



    async getPeople() {
        let apiToken;
        try{
             apiToken = await AsyncStorage.getItem('apiToken');
            console.log(`apitoken inja: ${apiToken}`);
        }
        catch(error){
            console.log(error);
        }
        // console.log('get people');
        // console.log(`api token onja: ${apiToken}`);
        fetch(`${GET_PEOPLE_SERVER_ADDRESS}${apiToken}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                        people : json.people
                    },
                    () => console.log(this.state.people)
                )
            })
            .catch(error => console.log(error))
    }


    static renderAttendance(people) {
        return people.map((person, index) => <Attendance key={index} name={person.name} familyName={person.familyName} parentID={person.parentIdNumber} />)
    }

    render() {

        return (
            <LinearGradient colors={['#DADFE1','#ececec', '#EEEEEE', '#EEEEEE', '#ececec','#BFBFBF']} style={{flex: 1, flexDirection : 'column'}}>
                <Text style={styles.txtAttendanceLabel}> لیست حضور و غیاب </Text>
                <View>{Home.renderAttendance(this.state.people)}</View>
            </LinearGradient>
        );
    }


}

const styles = StyleSheet.create({
    txtAttendanceLabel : {
        fontSize:22,
        textAlign:'center',
        alignSelf:'center' ,
        backgroundColor: '#bababa',
        marginTop:10,
        marginBottom: 5,
        paddingLeft : 20,
        paddingRight : 20,
        // paddingBottom: 5,
        // paddingTop: 5,
        borderRadius: 20,
        color : '#000',
        fontFamily: 'dastnevis'
        // elevation: 5
    }
});