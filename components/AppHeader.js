import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppHeader extends React.Component {
  render(){
    return (
      <View style={styles.appHeadeContainer}>
        <Text style={styles.textStyle}>
            Bedtime Stories
        </Text>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  appHeaderContainer: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 20
  },

  textStyle: {
      textAlign: 'center',
      marginTop: 70,
      color: 'black', 
      fontSize: 28,
      fontWeight: "bold",
      fontStyle: 'italic'

  }
});

