import React, {useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, Text, View} from 'react-native';
import useAnimation from '../hooks/useAnimation';

const Animation1Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMoving} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [
            {
              translateX: position,
            },
          ],
        }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMoving(100);
        }}
      />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
  },
});

export default Animation1Screen;
