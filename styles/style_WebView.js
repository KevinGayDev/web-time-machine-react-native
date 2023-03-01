import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      marginVertical:15,
    },   
    resultSearch: {
      flex: 1,
      flexDirection:"column",
      alignItems: 'center',
      alignContent:'stretch',
    },  
    buttonRow: {
      flex: 1,
      flexDirection:"row",
      flexGrow:1,
    },   
    pressable:
    { 
      flex:1,
      flexGrow:1,
      flexWrap:'wrap',
      alignItems: 'center',
      alignContent:'stretch',
      justifyContent: 'center',
      backgroundColor: '#DDDDDD',
      paddingHorizontal: 15,
      paddingVertical: 10,
      margin:15,
      height:60,
    },
  });