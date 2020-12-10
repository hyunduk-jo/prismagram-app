import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

const View = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

const Text = styled.Text``;

export default ({ navigation: { navigate } }) => (
  <View>
    <Text>Auth Home</Text>
    <TouchableOpacity onPress={() => navigate("Login")}>
      <Text>Go to Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate("Signup")}>
      <Text>Go to Signup</Text>
    </TouchableOpacity>
  </View>
)