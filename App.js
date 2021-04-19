import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppHeader from "./components/AppHeader"
import ReadStory from "./screens/ReadStory"
import WriteStory from "./screens/WriteStory"
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
    return (
        <AppContainer/>
    );
  }
 
}

const TabNavigator = createBottomTabNavigator({  //more than one values (i.e tabs) given
  Write: WriteStory,  //custom name: screen name
  Read: ReadStory
},
{
  defaultNavigationOptions: (navigation)=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName

      if (routeName === "WriteStory"){
        return(
          <Image source={require("")}
          style={{width:50, height:50}}/>
        )
      }
      else if(routeName === "ReadStory"){
        <Image  source ={require("")}
        style={{}}/>

      }
    }
  })
}
)

const AppContainer = createAppContainer(TabNavigator);