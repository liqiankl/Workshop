
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const Profile = ({navigation}) => {
  const [userName, setUserName] = useState('AboutReact');

  return (
    <View style={{flex:1}} >
      <View >
      <Text>Passing value form one screen to another</Text>
      <Text>Please enter your text below</Text>
      <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Enter Any value'}
          style={styles.inputStyle}
        />
        <Button
        title="Go to the next screen"
        onPress={()=>navigation.navigate('Message',{paramKey: userName,})} />

       </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});