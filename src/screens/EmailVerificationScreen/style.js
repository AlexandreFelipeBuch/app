import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  width: 70%;
  height: 180px;
`;
export const FieldArea = styled.View`
  width: 100%;
  padding: 30px;
`;
export const FieldText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const EmailText = styled.Text`
  text-align: center;
  font-size: 18px;
  margin-bottom: 15px;
`;
