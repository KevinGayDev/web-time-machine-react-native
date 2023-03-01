import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: 
  {
    flex:1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
  header:
  {
    backgroundColor: '#222222',
    height: 100,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },
  whiteText:
  {
    color: '#FFFFFF',
    fontSize : 32
  },
  textContainer:
  {
    flex:1,
    flexGrow:1,
    alignItems: "center",
    justifyContent: 'center'
  },
  text:
  {
    alignSelf:"flex-start",
    marginHorizontal: 10
  }
});