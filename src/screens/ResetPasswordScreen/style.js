import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const FieldArea = styled.View`
  width: 100%;
  padding: 30px;
  margin-top: 50px;
`;
export const FieldText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;
