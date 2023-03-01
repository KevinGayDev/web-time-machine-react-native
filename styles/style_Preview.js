import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
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
  webView:
  {
    flex:1,
    flexGrow:1,
    marginTop: 20,
    alignItems: "stretch",
    flex: 1
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  });