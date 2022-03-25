import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Platform,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });

  const onChange = (value: boolean, key: string) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const {isActive, isHungry, isHappy} = state;

  return (
    <View style={{marginLeft: 20}}>
      <HeaderTitle title="Switches" />

      <View>
        <Text>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
        <Text>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
        <Text>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text>{JSON.stringify(state, null, 2)}</Text>
    </View>
  );
};

export default SwitchScreen;
