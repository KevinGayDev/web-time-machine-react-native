import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  searchSite:
  {
    flex:1,
    flexGrow:1,
    backgroundColor: '#999999',
  },
  inputFields:
  { 
    flex:1,
    flexGrow:1,
    flexDirection:"row",
    alignItems: "center",
    flexWrap:'wrap',
  },
  inputText: {
    flex:1,
    flexGrow:1,
    height: 40,
    margin: 10,
    padding: 10,
  },
  input: {
    flex:10,
    flexGrow:1,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  date:
  { 
    textAlign: "center"
  },
  datePressable:
  { 
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
    height:60,
  },
  searchPressable:
  { 
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
  searchResult:
  {
    flex: 1,
  },
  centeredText: 
  {
    textAlign: 'center',
    fontSize: 32,
  },
});