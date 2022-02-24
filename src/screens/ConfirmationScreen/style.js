import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  background-color: ${Colors.background};
`;
export const Photo = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 180px;
  margin-left: auto;
  margin-right: auto;
`;
export const TitleText = styled.Text`
  top: 30px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
  color: ${Colors.primary};
  margin-bottom: 100px;
`;
