var React = require('react-native');

var {
  StyleSheet,
  Dimensions,
  PixelRatio,
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',    
    paddingTop: 40,
    paddingHorizontal: 25
  },
  modalContainerBox: {
    backgroundColor: '#FFF',    
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 5,
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
  loadingFull: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    flex: 1,
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
  quickContainer: {
    backgroundColor: '#FFF',
    flexDirection:'row',
    borderTopColor: '#bbb',
    borderTopWidth: StyleSheet.hairlineWidth,
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 0,
  },
  quickinput: {
    borderWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFFFFF',
    height: 34,
    paddingVertical: 3,
    paddingHorizontal: 5,  
    borderRadius: 5,
    flex: 1,
  },
  quickAdd: {
    paddingVertical: 8,
    flex: .5,
    borderRightColor: '#bbb',
    borderRightWidth: StyleSheet.hairlineWidth
  },
  quickButtonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  quickIcon: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 3,
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
    paddingTop: 23,
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
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  equipType: {
    fontSize: 13,
    flex: 1,
  },
  passDate: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  passVIcon: {
    color: '#999',
    justifyContent: 'flex-end'
  },
  passStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subStrate: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  passDesc: {
    fontSize: 13,
    color: '#777',
  },
  selectPhoto: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginVertical: 5,
  },
  previewContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  preview: {
    height: 150,
  },
});

module.exports= styles;