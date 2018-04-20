import { StackNavigator } from 'react-navigation';
import Home from './pages/Home'
import {I18nManager} from "react-native";
import Login from "./pages/Login";
import Splashscreen from "./components/Splash";

I18nManager.forceRTL(true);
export  default  App = StackNavigator({
    Splash : {screen : Splashscreen},
    Login : { screen: Login},
    Home : {screen : Home}
},{
    headerMode: 'hide'
})