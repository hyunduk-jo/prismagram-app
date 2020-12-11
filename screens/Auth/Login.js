import React from 'react';
import styled from "styled-components/native";
import AuthButton from '../../components/AuthButton';
import AuthInput from '../../components/AuthInput';

const View = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: white;
`;

const Text = styled.Text``;

export default () => (
  <View>
    <AuthInput placeholder="Email" value="" keyboardType="email-address" />
    <AuthButton text="Log in" onPress={() => null} />
  </View>
)