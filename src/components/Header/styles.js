import styled from 'styled-components';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  background-color: ${props => props.color};
  padding-top: ${getStatusBarHeight() - 50}px;
  padding-bottom: 10px;
  background-color: ${Colors.primary};
  margin-bottom: 15px;
`;

export const IconArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: relative;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 5px;
  z-index: 1;
  /* background: yellow; */
`;

export const LogoArea = styled.View.attrs({
  transform: [{translateX: -10}],
})`
  position: relative;
  width: 200px;
  height: 200px;
  margin: auto;
`;

export const LogoImg = styled.Image`
  width: 100%;
  height: 100%;
`;

export const HeaderViewTitle = styled.View`
  width: 100%;
  position: absolute;
  bottom: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: 'Montserrat-Medium';
  color: ${Colors.text};
`;

export const ButtonAddPhoto = styled.TouchableOpacity`
  position: absolute;
  right: 5px;
  bottom: 5px;
  align-items: center;
  padding: 10px;
`;

export const ButtonAddPhotoText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 12px;
  color: #fff;
`;

// export const ButtonPontoInteresseArea = styled.View`
//   flex-direction: row;
//   position: absolute;
//   right: 5px;
//   bottom: 5px;
//   padding: 10px;
// `;

export const ButtonPontoInteresse = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;
