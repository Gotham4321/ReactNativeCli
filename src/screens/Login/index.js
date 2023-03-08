/* eslint-disable prettier/prettier */

import React, {useEffect, useState} from 'react';
import {View, Image, ImageBackground, Text, TextInput} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import {Column, Row} from '../../component/common/RowCol';
import {authActDatum} from '../../action/authAct.js';
import {useDispatch, useSelector} from 'react-redux';
import {getBreedApi} from '../../service';

export const Login = () => {
  const [state, setState] = useState('bala');
  const dispatch = useDispatch();

  const sendData = () => {
    dispatch(authActDatum(state));
  };

  const getData = useSelector(datum => datum?.authReducer?.authLogin);

  const getList = async () => {
    try {
      let response = await getBreedApi();
      console.log(response, 'tata');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/thangamLogo.png')}
        style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <View style={styles.logoContent}>
            <Image
              source={require('../../assets/images/thangamSiteLogo.png')}
              style={styles.siteLogo}
            />
          </View>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.centerContent}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </View>
        <Row p={2}>
          <Column xl={12}>
            <Text style={styles.mobileText}>Enter Mobile Number</Text>
            <TextInput
              style={styles.mobileInput}
              placeholder="Mobile Number"
              placeholderTextColor="#A09E9E"
            />
          </Column>
        </Row>
        <View style={styles.noAccountyContainer}>
          <View style={styles.noAccountBox}>
            <Text style={styles.noAccountText}>
              Don’t have an account?{' '}
              <Text style={styles.signUpText}>Sign Up</Text>
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.signInButton} onPress={sendData}>
              <Text style={styles.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>{getData}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
