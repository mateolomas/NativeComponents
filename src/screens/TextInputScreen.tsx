import React from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';
import CustomSwitch from '../components/CustomSwitch';

const TextInputScreen = () => {
  const {form, onChange, isSuscribed} = useForm({
    name: '',
    email: '',
    password: '',
    isSuscribed: false,
  });

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <HeaderTitle title="Text Input" />

              <TextInput
                style={stylesScreeen.textInput}
                placeholder="Name"
                onChangeText={name => onChange(name, 'name')}
                value={form.name}
                autoCapitalize="words"
              />

              <TextInput
                style={stylesScreeen.textInput}
                placeholder="Email"
                onChangeText={email => onChange(email, 'email')}
                value={form.email}
                autoCapitalize="none"
                keyboardType="email-address"
              />

              <TextInput
                style={stylesScreeen.textInput}
                placeholder="Password"
                onChangeText={password => onChange(password, 'password')}
                value={form.password}
                secureTextEntry
              />

              <Text>isActive</Text>
              <CustomSwitch
                isOn={isSuscribed}
                onChange={value => onChange(value, 'isSuscribed')}
              />

              <Text>{JSON.stringify(form, null, 2)}</Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const stylesScreeen = StyleSheet.create({
  textInput: {
    height: 40,
    marginVertical: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default TextInputScreen;
