import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonLogout = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  background-color: ${Colors.primary};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;
