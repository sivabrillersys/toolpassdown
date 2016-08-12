var React = require('react-native');

var {
    StyleSheet,
} = React;

var styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 64,
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
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:'#00467f',
    flexDirection:'row',
    height:45,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  rowOdd: {
    backgroundColor: '#FFFFFF',
  },
  rowEven: {
    backgroundColor: '#F5F5F5',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#F5F5F5',
  },
  passIconRow: {
    width: 25,
    flexDirection:'row',
    paddingTop: 20,
  },
  passDataRow: {
    flex: 1,
    flexDirection:'column',
  },
  passRow: {
    flexDirection:'row',
    paddingBottom: 3,
  },
  equipName: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  equipType: {
    fontSize: 13,
    flex: 1,
  },
  passDate: {
    fontSize: 11,
    color: '#999',
    textAlign: 'right',
  },
  passVIcon: {
    color: '#999',
    justifyContent: 'flex-end'
  },
  passStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subStrate: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
  },
  passDesc: {
    fontSize: 11,
    color: '#777',
  },
});

module.exports= styles;