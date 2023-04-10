import React, { createContext, useContext } from "react";
import { View, Text } from 'react-native';
import { useAuthRequest } from 'expo-auth-session/providers/google';
import { AuthSessionResult } from 'expo-auth-session';
import { Button } from 'react-native';

const AuthContext = createContext({
  // initial state
})

type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [request, response, promptAsync] = useAuthRequest({
    clientId: 'YOUR_CLIENT_ID_HERE',
    scopes: ['profile', 'email'],
    usePKCE: false,
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);

  const SignInWithGoogle = async () => {
    const result = await promptAsync();
    if (result.type === 'success') {
      // handle successful authentication
      console.log('Authentication successful!');
    }
  }

  return (
    <AuthContext.Provider value={{
      user: null,
      SignInWithGoogle: SignInWithGoogle,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
