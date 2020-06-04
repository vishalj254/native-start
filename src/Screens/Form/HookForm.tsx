
import React from 'react';
import {Container, Spacer, Body} from 'rnfui';
import { View, StyleSheet, Alert ,Text, TextInput} from 'react-native';
import {useForm,Controller,} from 'react-hook-form'
import { HelperText, Button } from 'react-native-paper';
import UseHookForm from './useHookForm';
import AppButton from '../../Components/Shared/AppButton/Appbutton';




export default function HookForm(props:any) {
    const{doLogin,onChange,form}=UseHookForm();

    
    const {errors,control,}=form;
   
    
    return(
        <Container    >
            <Body style={styles.outer}> 
           <Spacer size={50}/>
           <View>
               <Text style={{fontSize:30,fontWeight:'bold'}}>React Hook Form</Text>
           </View>
           <Spacer size={30}/>
           <Controller
           as={
               <View style={styles.inner}>
                   <TextInput
                   placeholder={'First Name'}
                  
                   
                   />
               </View>
           } 
           control={control}
           onChange={onChange}
           name='FirstName'
           rules={{required:true}}
           />
           {errors.FirstName && <HelperText style={{color:'red'}}>FirstName is Required.</HelperText>}
           <Spacer size={20}/>
           <Controller
           as={
               <View style={styles.inner}>
                   <TextInput
                   placeholder={'Last Name'}
                   />
               </View>
           } 
           control={control}
           onChange={onChange}
           name='LastName'
           rules={{required:true}}
           />
           {errors.LastName && <HelperText style={{color:'red'}}>LastName is Required.</HelperText>}
           <Spacer size={20}/>
           <Controller
           as={
               <View style={styles.inner}>
                   <TextInput
                   placeholder={'Email Address'}
                   keyboardType={'email-address'}
                   error={errors.EmailAddress ? true : false}
                   />
               </View>
           } 
           control={control}
           onChange={onChange}
           name='EmailAddress'
           rules={{
            required: {value: true, message: 'Email is required!'},
            pattern: {
                value: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
              message: 'Email is invalid',
            },
          }}
           />
           {errors.EmailAddress &&  <HelperText style={{color: 'red'}}>
            {
             
              (errors.EmailAddress || {message: ''}).message
            }
          </HelperText>}
           <Spacer size={20}/>
           <Controller
           as={
               <View style={styles.inner}>
                   <TextInput
                   placeholder={'Password'}
                   secureTextEntry={true}
                
                   />
               </View>
           } 
           control={control}
           onChange={onChange}
           name='Password' 
           rules={{required:{value:true,message:'Password is required !'},minLength:{value:5,message:'Passward atlest be 5 character'}}}
           />
           {errors.Password && <HelperText style={{color:'red'}}>
               {(errors.Password || {message:''}).message}
               </HelperText>}
           <Spacer size={20}/>
           <Controller
           as={
               <View style={styles.inner}>
                   <TextInput
                   placeholder={'Phone Number'}
                   keyboardType='number-pad'
                 
                   />
               </View>
           } 
           control={control}
           onChange={onChange}
           name='PhoneNumber'
           rules={{required:true}}
           />
           {errors.PhoneNumber && <HelperText style={{color:'red'}}>PhoneNumber is Required.</HelperText>}
           <Spacer size={20}/>
           <Controller
           as={
               <View style={styles.inner}>
                   <TextInput
                   placeholder={'Redeem'}

                   />
               </View>
           } 
           control={control}
           onChange={onChange}
           name='Redeem'
           rules={{required:true}}
           />
           {errors.Redeem && <HelperText style={{color:'red'}}>Redeem is Required.</HelperText>}

           <Spacer size={30} />
         
          <AppButton onPress={form.handleSubmit(()=>{
              doLogin
          })} children={"SUBMIT"} />
          </Body>
        </Container>
    )
}

const styles =StyleSheet.create({
    outer:{
        padding:20,backgroundColor:'#f2f2f2', },
       

    inner:{
        backgroundColor:'white',
                   borderRadius:80,paddingLeft:50,paddingRight:80
    },
    button:{backgroundColor:'yellow',width:150,height:45,borderRadius:25,

    }

})