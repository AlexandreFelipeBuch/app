import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Image, View, Text, StyleSheet, Platform} from 'react-native';

import Images from '../../assets/Images';
import {Colors} from '../../config/Colors';

const slides = [
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    description: 'Trixx FS',
    img: Images.IllustAircraft,
    backgroundColor: `${Colors.primary}`,
    level: 20,
  },
  {
    title:
      'Aliquid eveniet consequuntur facilis amet voluptatibus accusamus perspiciatis?',
    description: 'Trixx FS',
    img: Images.IllustSolution,
    backgroundColor: `${Colors.primary}`,
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
      nextLabel="Próxima"
      skipLabel="Anterior"
      doneLabel="Confirmar"
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
    color: `${Colors.background}`,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    color: `${Colors.background}`,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default OnBoardingCustom;
