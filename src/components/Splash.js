import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator, AsyncStorage
} from 'react-native';
import LinearGradiant from 'react-native-linear-gradient'

const CHECK_USER_WITH_TOKEN_SERVER_ADDRESS = 'http://matinzd.com/api/v2/login_service/driverLogin.php?apitoken=';

export default class Splashscreen extends React.Component{

    componentWillMount() {
        AsyncStorage.removeItem('apiToken');
        this.CheckUserLogin().then(status => {
            console.log(status);
            if(status){
                const { replace } = this.props.navigation;
                return replace('Home');
            }
            else {
                const { replace } = this.props.navigation;
                return replace('Login');
            }
        });


    }

  render() {
    return (
      <LinearGradiant colors={['#2d3436' ,'#636e72', '#b2bec3', '#636e72', '#2d3436']} style={{flex: 1,justifyContent: 'center', alignItems:'center'}}>
        <Text style={{color: '#000',fontSize: 30, margin: 10}}>به برنامه رانندگان خوش آمدید</Text>
        <ActivityIndicator size={'large'}/>
      </LinearGradiant>
    );
  }

    async CheckUserLogin() {
        try{
            let apiToken = await AsyncStorage.getItem('apiToken');
            console.log(`apitoken: ${apiToken}`);
            return apiToken === null
                ? false
                : await this.checkUserLoginFromApi(apiToken);
        }
        catch(error){
            console.log(error);
        }
    }

    async checkUserLoginFromApi(apiToken) {
        console.log('in check user login from api');
        try{
            let response = await fetch(`${CHECK_USER_WITH_TOKEN_SERVER_ADDRESS}${apiToken}`);
            console.log("check u ser login from api ");
            console.log(`respnse : ${response.status}`);
            return response.status === 200;
        }catch(error) {
            console.log("in catch");
            console.log(error);
        }
    }
}
