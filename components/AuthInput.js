import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View``;

const TextInput = styled.TextInput``;

const AuthInput = ({ placeholder, value, keyboardType = "default" }) => {
  return <Container><TextInput keyboardType={keyboardType} placeholder={placeholder} value={value} /></Container>
}

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf(["default", "number-pad", "decimal-pad", "numeric", "email-address", "phone-pad"])
}

export default AuthInput;