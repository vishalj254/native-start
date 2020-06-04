import React, {useEffect} from 'react';
import {Container, Click} from 'rnfui';
import AppButton from '../AppButton/Appbutton';
import AppTheme from '../../../Config/AppTheme';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {Alert} from 'react-native';
import {postDataAxios} from '../../../Connectivity/FetchServices';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {updateAppState} from '../../../Redux/appAction';

export default function AppGmailLogin() {
  const dispatch = useDispatch();
  const [userData, setState]: any = React.useState('');
  useEffect(() => {
    _configureGoogleSignIn();
  }, []);

  const _configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        '534709622674-9tpotcf2s9osoid0h0t61m333bp3b79t.apps.googleusercontent.com', //Replace with your own client id
      offlineAccess: false,
    });
  };

  const checkUser = async (data: any) => {
    let body = {
      name: data.name,
      mobile: data.id,
      email: data.email,
      password: data.id,
    };
    console.log(body);
    let result = await postDataAxios('api/checkuser', body);
    console.log(result);
    if (result.RESULT) {
      await AsyncStorage.setItem('UserData', JSON.stringify(body));
      dispatch(updateAppState('loggedIn', true));
    } else {
      let result1 = await postDataAxios('api/addnewrecord', body);
      if (result1.RESULT) {
        await AsyncStorage.setItem('UserData', JSON.stringify(body));
        dispatch(updateAppState('loggedIn', true));
      } else {
        Alert.alert('Server Error!');
      }
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await GoogleSignin.revokeAccess();
      console.log('Success:', userInfo.user);
      checkUser(userInfo.user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        console.log('Something went wrong:', error.toString());
        Alert.alert('Something went wrong', error.toString());
        setState({
          error,
        });
      }
    }
  };

  return (
    <Container>
      <Click
        onPress={() => {
          signIn();
        }}>
        <AppButton
          style={{backgroundColor: AppTheme.color.danger}}
          children={'LOGIN WITH GMAIL'}
        />
      </Click>
    </Container>
  );
}
