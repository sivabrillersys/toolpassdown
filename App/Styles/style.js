var React = require('react-native');

var {
    StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10
  },
  containerBox: {
    backgroundColor: '#FFF',
    marginTop: 80,
    paddingHorizontal: 25
  },
  header: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
      marginTop: 0
  },
  logo: {
      width: 250,
      height:110,
  }, 
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  navBar: {
    backgroundColor:'#00467f',
  },
  navBarTitle:{
    color:'#FFFFFF'
  },
  barButtonTextStyle:{
    color:'#FFFFFF'
  },
  barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
  },
  label: {
    fontSize: 12,
    color: '#777777',
    marginBottom: 3
  },
  mandatory: {
    color: '#FF0000'
  },
  scrollView: {
    paddingBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#72bf44',
    height: 34,
    paddingVertical: 3,
    paddingHorizontal: 5,  
    borderRadius: 5,
    marginBottom: 5
  },
  button: {
    borderWidth: 1,
    borderColor: '#00467f',
    backgroundColor: '#00467f',
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginBottom: 5
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputIcon: {
    position: 'absolute',
    top: 4,
    right: 5,
    width: 24,
    fontSize: 24,
    color: '#666'
  },
  error: {
    alignSelf: 'center',
    color: '#FF0000',
    fontSize: 12,
    paddingVertical: 3,
  } 

});

module.exports= styles;