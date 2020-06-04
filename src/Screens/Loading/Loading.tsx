/* eslint-disable prettier/prettier */
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {Container, Center} from 'rnfui';
export default function Loading() {
  return (
    <Container>
      <Center allAxis>
        <ActivityIndicator size={'large'} />
      </Center>
    </Container>
  );
}
