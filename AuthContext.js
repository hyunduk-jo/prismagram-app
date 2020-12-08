import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ isLoggedIn: isLoggedInProp, children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(isLoggedInProp);
  const logUserIn = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
      setIsloggedIn(true);
    } catch (e) {
      console.log(e);
    }
  }

  const logUserOut = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
      setIsloggedIn(false);
    } catch (e) {
      console.log(e)
    }
  }
  return <AuthContext.Provider value={{ isLoggedIn, logUserIn, logUserOut }}>
    {children}
  </AuthContext.Provider>
}

export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
}

export const useLogIn = () => {
  const { logUserIn } = useContext(AuthContext);
  return logUserIn;
}

export const useLogOut = () => {
  const { logUserOut } = useContext(AuthContext);
  return logUserOut;
}