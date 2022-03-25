import React from 'react';
import {Alert, Button, Text, TouchableOpacity, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const showPromt = () => {
    Alert.prompt(
      'Login',
      'Enter your email and password',
      text => console.log(text),
      'secure-text',
      'Login',
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <HeaderTitle title="Alerts" />

      <Button title="Alert con dos botones" onPress={createTwoButtonAlert} />
      <Button title="Alert con tres botones" onPress={createThreeButtonAlert} />
      <Button title="Alert con promt" onPress={showPromt} />
    </View>
  );
};

export default AlertScreen;
