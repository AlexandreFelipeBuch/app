import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Image, View, Text, StyleSheet, Platform} from 'react-native';

import Images from '../../assets/Images';

const slides = [
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    description: 'TFS',
    img: Images.IllustAircraft,
    backgroundColor: '#8a43cc',
    fontColor: '#000',
    level: 20,
  },
  {
    title:
      'Aliquid eveniet consequuntur facilis amet voluptatibus accusamus perspiciatis?',
    description: 'TFS',
    img: Images.IllustSolution,
    backgroundColor: '#8a43cc',
    fontColor: '#000',
    level: 20,
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elitwn',
    description: 'TFS',
    img: Images.IllustStart,
    backgroundColor: '#8a43cc',
    fontColor: '#000',
    level: 20,
  },
];

const OnBoardingCustom = () => {
  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    return (
      <View style={[styles.wrap, {backgroundColor: item.backgroundColor}]}>
        <Image source={item.img} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  const _onDone = () => {
    navigation.navigate('SignIn');
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      showSkipButton={true}
      showNextButton={true}
      showDoneButton={true}
      buttonTextStyle={styles.buttonText}
      onDone={_onDone}
      onSkip={_onDone}
      keyExtractor={item => item.title}
    />
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: Platform.isPad ? null : 25,
  },
  imageStyle: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default OnBoardingCustom;
