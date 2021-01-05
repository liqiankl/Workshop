import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const Message =({route})=> {
    return (
      <View >
       <Text >
          React Native Pass Value From One Screen to Another Using React
          Navigation
        </Text>

        <Text>Values Passed from Profile screen :{route.params.paramKey}</Text>
       
      </View>
      
    );
  }
  
  
  export default Message;