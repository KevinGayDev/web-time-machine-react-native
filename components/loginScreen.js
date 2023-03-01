import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from "../styles/style_Login"

export default function Login({ navigation }) 
{
 const [userLogin, setUserLogin] = React.useState({mail:"", password:""});

 function changeInput(label, value)
 {
  userLogin[label] = value;
  setUserLogin({...userLogin});
 }

 function createLogin()
 {
  if (userLogin.mail  === "" || userLogin.password  === "")
  {
   Alert.alert('Un ou plusieurs champs ne sont pas remplis');
  }
  else if (userLogin.mail !== "" && userLogin.password !== "")
  {
   navigation.navigate('Menu', { screen: 'Rechercher' });
  }
 }

 return (
  <View style = {styles.container}>
    <StatusBar style = "auto" />
    <View style = {styles.header}>
        <Text style = {styles.whiteText}>Connexion</Text>
    </View>
    <View style = {styles.inputForm}>
        <View style = {styles.inputFields}>
          <Text style = {styles.inputText}>Mail</Text>
          <TextInput style = {styles.input}
          onChangeText = {(value) => changeInput("mail", value)}
          value = {userLogin.mail}
          placeholder = "Adresse mail"
          keyboardType = "email-address"
          />
        </View>
        <View style = {styles.inputFields}>
          <Text style = {styles.inputText}>Mot de passe</Text>
          <TextInput style = {styles.input}
          onChangeText = {(value) => changeInput("password", value)}
          value = {userLogin.password}
          placeholder = "Mot de passe"
          keyboardType = "default"
          secureTextEntry = {true}
          />
        </View>
    </View>
    <TouchableOpacity style = {styles.pressable}
    onPress = {createLogin}>
      <Text>Se connecter</Text>
    </TouchableOpacity>
  </View>
 );
}