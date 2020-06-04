import React from 'react';
import {Appbar, Headline, useTheme} from 'react-native-paper';
import {useActiveTheme} from 'rnfui';
import {StyleSheet, Alert, AsyncStorage} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../../Redux/appAction';

function AppHeaderMain({scene,navigation}: any) {
  // console.log('scene', scene);
  console.log('scene', scene);
  const headerTitle = scene.route.name;
  const dispatch=useDispatch();
  const Theme = useActiveTheme();

  const styles = StyleSheet.create({
    titleStyle: {
      color: Theme.color.white,
    },
  });
  const clear =async ()=>{
    await AsyncStorage.removeItem('UserData');
    dispatch(updateAppState('loggedIn',false))
  }

  return (
    <Appbar.Header>
      <Appbar.Action icon={'menu'} ></Appbar.Action>
      <Appbar.Content
        title={
          <Headline style={styles.titleStyle}>{headerTitle}</Headline>
        }></Appbar.Content>
        <Appbar.Action icon={'logout'}  onPress={()=>{clear()}}></Appbar.Action>
    </Appbar.Header>
  );
}

export default AppHeaderMain;
