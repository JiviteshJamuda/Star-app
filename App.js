import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'

export default function App() {
  return <AppContainer/>
}

const appStackNavigator = createStackNavigator(
  {
    Home : {
      screen : HomeScreen,
      navigationOptions : {
        headerShown : false
      }
    },
    Details : {
      screen : DetailScreen
    }
  },
  {
    initialRouteName : "Home"
  }
)

const AppContainer = createAppContainer(appStackNavigator)