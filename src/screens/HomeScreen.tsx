import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';
import {menuItem} from '../data/menuItems';

interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

const renderHeader = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 20}}>
      <Text style={styles.title}> Opciones de menu</Text>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = (menuItem: MenuItem) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(menuItem.component as any)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name={menuItem.icon} size={30} color="#000" />
            <Text style={{marginLeft: 10}}>{menuItem.name}</Text>
          </View>
          <Icon name="ios-arrow-forward" size={30} color="#000" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItem}
        renderItem={({item}) => {
          return renderItem(item);
        }}
        keyExtractor={item => item.name.toString()}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default HomeScreen;
