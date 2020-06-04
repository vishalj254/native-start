import React from 'react';
import { useForm } from 'react-hook-form';
export default function UseHookForm(){
    type FormData={
        FirstName:string,
        LastName:string,
        Password:string,
        EmailAddress:string,
        PhoneNumber:string,
        Redeem:string
        
    }
    const onChange = (args: any) => args[0].nativeEvent.text
    const doLogin=(data:any)=>{
       const body =form.getValues();
       console.log("1");
       
      
        console.log("Data......",body);
        
    }
    const form=useForm<FormData>({
        mode:'onChange',defaultValues:{
            FirstName:'',
            LastName:'',
            Password:'',
            EmailAddress:'',
            PhoneNumber:'',
            Redeem:''
            
        }
    })
    return{onChange,doLogin,form}
}