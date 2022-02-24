import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  background: ${props =>
    props.bgColor ? props.bgColor : Colors.primary};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  elevation: 3;
`;

export const IconArea = styled.View``;

export const TitleGuia = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: ${Colors.textBackgroundColor};
`;
