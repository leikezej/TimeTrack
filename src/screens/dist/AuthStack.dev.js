"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigationStack = require("react-navigation-stack");

var _reactNavigation = require("react-navigation");

var _SignIn = _interopRequireDefault(require("../components/SignIn"));

var _SignUp = _interopRequireDefault(require("../components/SignUp"));

var _Home = _interopRequireDefault(require("../components/Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var screens = {
  SignInScreen: {
    screen: _SignIn["default"]
  },
  SignUpScreen: {
    screen: _SignUp["default"]
  },
  HomeScreen: {
    screen: _Home["default"]
  }
};
var homeStack = (0, _reactNavigationStack.createStackNavigator)(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#009387"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      textAlign: 'center',
      fontWeight: 'bold'
    }
  }
}, {
  initialRouteName: 'SignInScreen'
});

var _default = (0, _reactNavigation.createAppContainer)(homeStack);

exports["default"] = _default;