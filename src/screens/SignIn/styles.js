import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
export const InputArea = styled.View`
  width: 100%;
  margin: 30px;
  padding: 20px;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: ${Colors.primary};
`;
export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: ${Colors.text};
  font-weight: bold;
  margin-left: 5px;
`;
