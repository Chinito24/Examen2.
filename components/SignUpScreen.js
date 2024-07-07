import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import AuthForm from './AuthForm';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8c14uwIjzmt5suHhfegriepgCndWxGk",
  authDomain: "proyectoutt-47d8d.firebaseapp.com",
  databaseURL: "https://proyectoutt-47d8d-default-rtdb.firebaseio.com",
  projectId: "proyectoutt-47d8d",
  storageBucket: "proyectoutt-47d8d.appspot.com",
  messagingSenderId: "760244445742",
  appId: "1:760244445742:web:bbf5e42a420ca19bab75bf",
  measurementId: "G-K159TJCJVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  const handleAuthentication = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.authContainer}>
          <Text style={styles.title}>Logged in as {user.email}</Text>
          <Button
            title='Logout'
            onPress={handleLogout}
            color={'#e74c3c'}
          />
        </View>
      ) : (
        <AuthForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "gray",
  },
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
});

export default SignUpScreen;
