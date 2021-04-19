import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from "./components/AppHeader"


export default class WriteStory extends React.Component {
  render(){
    return (
        <View> 
        <AppHeader/>
        <Text> Write Stories </Text>
        </View>
       
    );
  }
 
}
