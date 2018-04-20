import {Component} from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import * as React from "react";
import styles from './../assets/styles/Attendance';

const SENT_ATTENDANCE_SERVER_ADDRESS = 'http://matinzd.com/api/v2/insert.php';

export default class Attendance extends Component{
    constructor(props) {
        super(props);

    };

    pressPresent(name, familyName, parentID ){
        let currentTime = new Date();
        console.log(JSON.stringify({
            personName: name,
            personFamilyName: familyName,
            personAttendance: 'حاضر',
            attendanceTime: currentTime,
            parentIdNumber : parentID
        }));
        Alert.alert('وضعیت:',`${name} ${familyName} حاضر است.`, [{text: 'باشد'}]);
        fetch(SENT_ATTENDANCE_SERVER_ADDRESS , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                personName: name,
                personFamilyName: familyName,
                attendanceTime: currentTime,
                personAttendance: 'حاضر',
                parentIdNumber : parentID
            })
        }).then((response) => {
            console.log(`response in fetch for insert : ${response}`);
        })
    }

    // personName
    // personAttendance
    // personFamilyName
    // attendanceTime

    pressAbsent(name, familyName, parentID){
        let currentTime = new Date();
        Alert.alert('وضعیت:',`${name} ${familyName} غایب است. `,[{text: 'باشد'}]);
        fetch(SENT_ATTENDANCE_SERVER_ADDRESS , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // id: null,
                personName: name,
                personFamilyName :  familyName,
                attendanceTime: currentTime,
                personAttendance: 'غایب',
                parentIdNumber : parentID
            })
        }).then((response) => {
            console.log(response);
        }).catch(error => console.log(error));
    }

    render(){
        const {name , familyName, parentID} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.txtNames}> {name} {familyName} </Text>
                <TouchableOpacity style={styles.btnPresent} onPress={this.pressPresent.bind(this,name, familyName, parentID)}>
                    <Text style={styles.txtPresent}> حاضر </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAbsent} onPress={this.pressAbsent.bind(this,name, familyName, parentID)}>
                    <Text style={styles.txtAbsent}> غایب </Text>
                </TouchableOpacity>
            </View>
        );
    }


}

