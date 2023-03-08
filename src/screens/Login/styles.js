/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoContent: {
    flex: 1,
    alignItems: 'center',
  },
  centerContainer: {
    flex: 0,
    flexDirection: 'row',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
  },
  loginText: {
    color: '#525252',
    fontWeight: '700',
    fontSize: 24,
    marginTop: 150,
  },
  mobileText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 14,
  },
  mobileInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#DED2D9',
    borderWidth: 1,
  },
  noAccountyContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noAccountBox: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buttonBox: {
    flex: 1,
    alignItems: 'center',
  },
  noAccountText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  signUpText: {
    color: '#982620',
    fontSize: 14,
    fontWeight: '500',
  },
  signInButton: {
    backgroundColor: '#FBC343',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderWidth: 0,
    width: '100%',
    maxWidth: 200,
    padding: 12,
    marginBottom: 13,
  },
  siteLogo: {
    width: '70%',
    height: 80,
    resizeMode: 'cover',
    marginTop: 50,
  },
  loginBtnTxt: {
    textAlign: 'center',
  },
});

export default styles;
