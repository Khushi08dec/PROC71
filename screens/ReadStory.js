import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from "./components/AppHeader"


export default class ReadStory extends React.Component {
  render(){
    return (
        <View> 
        <AppHeader/>
        <Text> Read Stories </Text>
        </View>
    );
  }
 
}
