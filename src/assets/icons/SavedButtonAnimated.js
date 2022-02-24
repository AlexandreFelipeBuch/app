import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import iconAnimation from '../../components/iconAnimation';

const SavedButton = () => {
  const [trigger, setTrigger] = useState(false);
  const {IconFilled, IconRegular} = iconAnimation(trigger);
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setTrigger(!trigger)}>
      <Animated.View style={IconRegular}>
        <Icon name="bookmark-o" size={30} color="white" />
      </Animated.View>
      <Animated.View style={[IconFilled, styles.absolute]}>
        <Icon name="bookmark" size={30} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
});

export default SavedButton;
