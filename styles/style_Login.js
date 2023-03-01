import { StyleSheet } from 'react-native';

export default StyleSheet.create
({
  container: {
    flex:1,
    flexGrow:1,
    backgroundColor: '#FFFFFF',
    justifyContent: "center",
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
  header:
  {
    backgroundColor: '#222222',
    height: 100,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
  },
  whiteText:
  {
    color: '#FFFFFF',
    fontSize : 32,
  },
  inputForm:
  {
    flex:1,
    flexGrow:1,
    alignItems: "center",
    flexWrap:'wrap',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  inputFields:
  { 
    flex:5,
    flexGrow:1,
    flexDirection:"row",
    alignItems: "center",
    flexWrap:'wrap',
    backgroundColor: '#999999',
  },
  inputText: {
    flex:1,
    flexGrow:1,
    height: 40,
    margin: 10,
    padding: 10,
  },
  input: {
    flex:3,
    flexGrow:1,
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  pressable: {
    flex:1,
    flexGrow:1,
    flexWrap:'wrap',
    alignItems: 'center',
    alignContent:'stretch',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    paddingHorizontal: 30,
    paddingVertical: 10,
    margin:25,
  },
});