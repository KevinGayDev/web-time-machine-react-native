import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from "../styles/style_About"

export default function About() {
  return (
    <View style = {styles.container}>
    <StatusBar style = "auto" />
    <View style = {styles.header}>
        <Text style = {styles.whiteText}>A propos</Text>
    </View>
    <View style = {styles.textContainer}>
      <Text style = {styles.textTitle}>Comment ça fonctionne ?</Text>
      <Text style = {styles.text}>Entrez l'adresse d'un site ainsi qu'une date, puis appuyez sur rechercher.</Text>
      <Text style = {styles.text}>Une requête sera alors envoyée ; si la date et le site sont dans la base de données, un résultat sera renvoyé.</Text>
      <Text style = {styles.text}>Vous pourrez alors accéder au site demandé, soit sous forme de prévisualisation, soit en allant directement sur le site de Wayback Machine.</Text>
    </View>
    <View style = {styles.textContainer}>
      <Text>Et si ça ne renvoie rien ?</Text>
      <Text style = {styles.text}>Le site et/ou la date que vous avez demandé sont erronés.</Text>
      <Text style = {styles.text}>Pas de souci, il vous suffit de réessayer !</Text>
    </View>
  </View>
 );
}