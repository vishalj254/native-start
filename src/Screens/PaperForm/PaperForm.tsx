/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Spacer, Body} from 'rnfui';
import {Controller, useForm} from 'react-hook-form';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput, HelperText, Button, DefaultTheme} from 'react-native-paper';
import {ThemeConsumer} from 'rnfui/compiled/dist/Themes/ThemeContext';
import AppTheme from '../../Config/AppTheme';
import AppButton from '../../Components/Shared/AppButton/Appbutton';
import {postDataAxios} from '../../Connectivity/FetchServices';

export default function PaperForm(props: any) {
  const {reset} = useForm();
  const doLogin = async () => {
    let body = form.getValues();
    body['name'] = body.FirstName + ' ' + body.LastName;
    console.log(body);
    let result = await postDataAxios('api/addnewrecord', body);
    console.log(result);
    if (result.RESULT) {
      Alert.alert('SignUp Successful', 'Click ok to login!', [
        {text: 'Ok', onPress: () => props.navigation.goBack()},
      ]);
    } else {
      Alert.alert('SignUp Unsuccessful', '');
    }
  };

  const onchange = (args: any) => args[0].nativeEvent.text;

  const form = useForm({mode: 'onChange'});
  return (
    <Container>
      <Body style={{padding: 20, backgroundColor: '#f2f2f2'}}>
        <Spacer size={50} />
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: 'blue'}}>
            Sign Up
          </Text>
        </View>
        <Spacer size={30} />
        <View>
          <Controller
            as={
              <TextInput
                mode={'outlined'}
                style={Styles.inner}
                label={'First Name'}
                placeholder={'First Name'}
                error={form.errors.FirstName ? true : false}
              />
            }
            control={form.control}
            onChange={onchange}
            name={'FirstName'}
            rules={{required: {value: true, message: 'First Name is Required'}}}
          />
          {form.errors.FirstName && (
            <HelperText style={{color: 'red'}}>
              {(form.errors.FirstName || {message: ''}).message}
            </HelperText>
          )}
        </View>
        <Spacer size={20} />
        <View>
          <Controller
            as={
              <TextInput
                mode={'outlined'}
                style={Styles.inner}
                label={'Last Name'}
                placeholder={'Last Name'}
                error={form.errors.LastName ? true : false}
              />
            }
            control={form.control}
            onChange={onchange}
            name={'LastName'}
            rules={{required: {value: true, message: 'Last Name is Required'}}}
          />
          {form.errors.LastName && (
            <HelperText style={{color: 'red'}}>
              {(form.errors.LastName || {message: ''}).message}
            </HelperText>
          )}
        </View>
        <Spacer size={20} />
        <View>
          <Controller
            as={
              <TextInput
                mode={'outlined'}
                style={Styles.inner}
                keyboardType="number-pad"
                label={'Phone Number'}
                placeholder={'Phone Number'}
                error={form.errors.mobile ? true : false}
              />
            }
            control={form.control}
            onChange={onchange}
            name={'mobile'}
            rules={{
              required: {value: true, message: 'Phone Number is Required'},
              minLength: {value: 6, message: 'Phone Number will be  10 digits'},
              maxLength: {value: 10, message: 'Number not exceed then 10'},
            }}
          />
          {form.errors.mobile && (
            <HelperText style={{color: 'red'}}>
              {(form.errors.mobile || {message: ''}).message}
            </HelperText>
          )}
        </View>
        <Spacer size={20} />
        <View>
          <Controller
            as={
              <TextInput
                style={Styles.inner}
                mode={'outlined'}
                label={'Email Address'}
                placeholder={'Email Address'}
                error={form.errors.email ? true : false}
              />
            }
            control={form.control}
            onChange={onchange}
            name={'email'}
            rules={{
              required: {value: true, message: 'email is required'},
              pattern: {
                value: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                message: 'Email is invalid',
              },
            }}
          />
          {form.errors.email && (
            <HelperText style={{color: 'red'}}>
              {(form.errors.email || {message: ''}).message}
            </HelperText>
          )}
        </View>
        <Spacer size={20} />
        <View>
          <Controller
            as={
              <View>
                <TextInput
                  mode={'outlined'}
                  style={Styles.inner}
                  secureTextEntry={true}
                  label={'Password'}
                  placeholder={'Password'}
                  error={form.errors.password ? true : false}
                />
              </View>
            }
            control={form.control}
            onChange={onchange}
            name={'password'}
            rules={{
              required: {value: true, message: 'Password is Required'},
              minLength: {value: 5, message: 'Password atleast be 5 charcater'},
            }}
          />
          {form.errors.password && (
            <HelperText style={{color: 'red'}}>
              {(form.errors.password || {message: ''}).message}
            </HelperText>
          )}
        </View>
        <Spacer size={20} />

        <AppButton
          onPress={form.handleSubmit(() => {
            doLogin();
          })}
          children={'SUBMIT'}
        />
      </Body>
    </Container>
  );
}
const Styles = StyleSheet.create({
  inner: {
    backgroundColor: 'white',
  },
});
