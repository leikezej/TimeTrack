
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";


const screens = {
    SignInScreen: {
        screen: SignIn,
    },
    SignUpScreen: {
        screen: SignUp,
    },
    HomeScreen: {
        screen: Home,
    }
}
const homeStack = createStackNavigator(
    screens,
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#009387",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign:'center',
                fontWeight: 'bold',
            },
        },
    },
    {initialRouteName: 'SignInScreen'}
    );

export default createAppContainer(homeStack);