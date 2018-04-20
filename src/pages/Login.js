import React, { Component } from 'react';
import {AppRegistry ,
    Text ,
    View ,
    Image,
    TouchableOpacity,
    TextInput, AsyncStorage} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from '../assets/styles/Login'

const LOGIN_SERVER_ADDRESS = 'http://matinzd.com/api/v2/login_service/driverLogin.php';

export default class Login extends Component {


    componentWillMount() {

        this.setState ({
            socialCode : {
                value : '',
                error : ''
            },
            password : {
                value : '',
                error : ''
            },
            errorVisibility : 'none'
        });
    }



    render() {
        const  socialCodeError = this.state.socialCode.error;
        const  passwordError = this.state.password.error;

        return (
            <LinearGradient colors={['#ddd', '#67809F', '#34495E', '#67809F', '#ddd']} style={styles.gradiant}  >
                <View style={styles.container}>
                    <View style={styles.loginbox}>
                        <Text style={styles.loginTitle}> ورود</Text>
                        <View style={styles.inputGroups}>
                            <Text style={styles.lableText}>کد ملی:</Text>
                            <TextInput
                                style={styles.Inputtext}
                                placeholder='لطفا کد ملی خود را وارد کنید'
                                underlineColorAndroid='transparent'
                                onChangeText={this.changeSocialCodeInput.bind(this)}
                                keyboardType={'numeric'}
                            />
                            <Text style={[styles.error, this._checkDisplay(socialCodeError)]}>پر کردن این فیلد الزامی است.</Text>
                        </View>
                        <View style={styles.inputGroups}>
                            <Text style={styles.lableText}>پسورد:</Text>
                            <TextInput
                                style={styles.Inputtext}
                                placeholder='لطفا پسورد خود را وارد کنید'
                                underlineColorAndroid='transparent'
                                secureTextEntry={true}
                                onChangeText={this.changePasswordInput.bind(this)}
                            />
                            <Text style={[styles.error, this._checkDisplay(passwordError)]}>پر کردن این فیلد الزامی است.</Text>
                            <Text style={[styles.error, {display : this.state.errorVisibility}]}>کد ملی یا رمز عبور اشتباه است.</Text>
                        </View>
                        <TouchableOpacity activeOpacity={.7} style={styles.loginbutton} onPress={this.login.bind(this)}>
                            <Text style={styles.loginbuttontext}>ورود به اپلیکیشن</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Text style={styles.forgetpasswordtext}>فراموشی رمز عبور</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        );
    }


    login() {

        let {socialCode , password} = this.state;
        if(socialCode.value === ''){
            this.setState({
                socialCode: {
                    value : '',
                    error : 'فیلد کد ملی نمیتواند خالی باشد.'
                }
            })
        }
        if(password.value === ''){
            this.setState({
                password: {
                    value : '',
                    error : 'فیلد پسورد نمیتواند خالی باشد.'
                }
            })
        }

        this.requestLoginFromApi({
            socialCode: socialCode.value,
            password: password.value
        });
    }


    changeSocialCodeInput(text){
        this.setState({
            socialCode: {
                value : text,
                error : ''
            }
        });
        return;
    }

    changePasswordInput(text) {
        this.setState({
            password : {
                value : text,
                error : ''
            }
        });
        return;
    }

    _checkDisplay(field) {
        return { display: field === '' ? 'none' : 'flex'}
    }

    async requestLoginFromApi(params) {
        console.log(this);

        try {
            // console.log(params);
            let {socialCode, password} = params;

            let response = await fetch(LOGIN_SERVER_ADDRESS ,{
                method : 'POST',
                header: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    socialCode,
                    password
                })
            });
            let json = await response.json();
            // console.log()
            console.log(json);
            console.log(`response1 : ${response}`);

            if(json.code === 200) { // success
                console.log('success');
                this.setState({
                    errorVisibility: 'none'
                });
                this.setDataUser(json.token);

            }
            if(json.code === "error") { // incorrect or invalid username and password
                console.log('invalid');
                this.setState({
                    errorVisibility: 'flex'
                })
            }


        } catch(error){
            console.log(error);
        }
    }

    async setDataUser(apiToken) {
        try{
            await AsyncStorage.setItem('apiToken', apiToken);
            const { replace } = this.props.navigation;
            return replace('Home');
        }
        catch (error) {
            console.log(error);
        }
    }


}
