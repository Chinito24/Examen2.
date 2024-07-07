import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const AuthForm = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title={isLogin ? 'Sign In' : 'Sign Up'}
          onPress={handleAuthentication}
          color={'#3498db'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Login'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 50,
    elevation: 3,
    background: "#e3edf7",
  },
  title: {
    fontSize: 35,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 15,
    borderRadius: 50,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
});

export default AuthForm;
