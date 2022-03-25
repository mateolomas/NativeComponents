import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const InfiniteScrollScreen = () => {
  const [items, setItems] = React.useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = items.length + i;
    }
    setTimeout(() => {
      setItems([...items, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <Image
        source={{
          uri: `https://picsum.photos/id/${item}/500/500`,
        }}
        style={{
          width: '100%',
          height: 300,
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={items}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={<HeaderTitle title="List Header" />}
        onTouchEnd={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScrollScreen;
