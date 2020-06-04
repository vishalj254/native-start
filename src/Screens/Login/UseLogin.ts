/* eslint-disable dot-notation */
import React from 'react';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {updateAppState} from '../../Redux/appAction';
import {postDataAxios} from '../../Connectivity/FetchServices';

export default function UseLogin() {
  const dispatch = useDispatch();
  type FormData = {
    FirstName: string;
    LastName: string;
    Password: string;
    EmailAddress: string;
    PhoneNumber: string;
    Redeem: string;
  };
  const onChange = (args: any) => args[0].nativeEvent.text;
  const doLogin = async () => {
    const body = form.getValues();
    body['email'] = body.EmailAddress;
    body['password'] = body.Password;
    console.log(body);
    let result = await postDataAxios('api/checkuser', body);
    console.log(result);
    if (result.RESULT) {
      await AsyncStorage.setItem('UserData', JSON.stringify(body));
      dispatch(updateAppState('loggedIn', true));
    } else {
      Alert.alert('Invalid Credentials', '');
    }
  };
  const form = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      FirstName: '',
      LastName: '',
      Password: '',
      EmailAddress: '',
      PhoneNumber: '',
      Redeem: '',
    },
  });
  return {onChange, doLogin, form};
}
