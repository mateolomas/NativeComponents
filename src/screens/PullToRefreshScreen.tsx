import React from 'react';
import {Text, View, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const PullToRefreshScreen = () => {
  const [refreshin, setRefreshin] = React.useState(false);
  const [data, setData] = React.useState<string>('');

  const onRefresh = () => {
    setRefreshin(true);
    setTimeout(() => {
      setRefreshin(false);
      setData('Hello world from PullToRefreshScreen');
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshin} onRefresh={onRefresh} />
      }>
      <View style={{...styles.globalMargin, flex: 1}}>
        <HeaderTitle title="Pull to refresh" />
        <Text>{data}</Text>
      </View>
    </ScrollView>
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

export default PullToRefreshScreen;
