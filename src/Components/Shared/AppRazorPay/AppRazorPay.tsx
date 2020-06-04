/* eslint-disable radix */
import React, {useState} from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import {Container, Center, Spacer} from 'rnfui';
import {Alert, TextInput, StyleSheet, View} from 'react-native';
import AppButton from '../AppButton/Appbutton';
import AppTheme from '../../../Config/AppTheme';
import {postDataAxios} from '../../../Connectivity/FetchServices';

export default function AppRazorPay() {
  const [amount, setamount] = useState(0);
  const databaseEntry = async (tid: any) => {
    let body = {
      email: 'vishaljain2504@gmail.com',
      name: 'Vishal Jain',
      amount: amount,
      transactionid: tid,
    };
    let result = await postDataAxios('api/transaction', body);
    if (result.RESULT) {
      Alert.alert(`Success: ${tid}`);
    } else {
      Alert.alert('Server Error!');
    }
  };
  return (
    <Container>
      <Center allAxis>
        <Spacer size={50} />
        <View style={styles.inner}>
          <TextInput
            placeholder={'Amount'}
            keyboardType={'numeric'}
            value={String(amount)}
            onChangeText={(text) => setamount(parseInt(text))}
          />
        </View>
        <AppButton
          onPress={() => {
            var options = {
              description: 'VISHAL JAIN PAYMENT METHOD',
              image:
                'https://i.pinimg.com/originals/d1/d2/66/d1d26618a7876afa7b99f2afebf6c790.jpg',
              currency: 'INR',
              key: 'rzp_test_q4Qz0jiMV0dBky',
              amount: amount * 100,
              name: 'Vishal Jain',
              // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
              prefill: {
                email: 'vishaljain2504@gmail.com',
                contact: '9174537339',
                name: 'Vishal Jain',
              },
              theme: {color: AppTheme.color.primary},
            };
            RazorpayCheckout.open(options)
              .then((data: any) => {
                // handle success
                databaseEntry(data.razorpay_payment_id);
                setamount(0);
              })
              .catch((error: any) => {
                // handle failure
                console.log(`Error: ${error.code} | ${error.description}`);

                Alert.alert(`Error: ${error.code} | ${error.description}`);
              });
          }}
          children={'Payment With RazorPay'}
        />
      </Center>
    </Container>
  );
}

const styles = StyleSheet.create({
  inner: {
    backgroundColor: 'white',
    borderRadius: 80,
    paddingLeft: 50,
    paddingRight: 80,
  },
});
