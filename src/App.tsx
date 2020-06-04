import React, {useEffect} from 'react';
import {ThemeProvider as PaperThemeProvider} from 'react-native-paper';
import {ThemeProvider} from 'rnfui';
import {Provider} from 'react-redux';
import AppRouter from './Navigation/AppRouter/AppRouter';
import PaperTheme from './Config/PaperTheme';
import AppTheme from './Config/AppTheme';
import store from './Redux/store';
import NotificationHandler from './Utilities/NotificationHandler';

console.disableYellowBox = true;

function App() {
  useEffect(() => {
    NotificationHandler.init();
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   console.log('FCM Message Data:', remoteMessage.data);

    //   // Update a users messages list using AsyncStorage
    //   const currentMessages: any = await AsyncStorage.getItem('messages');
    //   const messageArray = JSON.parse(currentMessages);
    //   messageArray.push(remoteMessage.data);
    //   await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
    // });
    return () => {
      NotificationHandler.removeListeners();
    };
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider value={AppTheme}>
        <PaperThemeProvider theme={PaperTheme}>
          <AppRouter />
        </PaperThemeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
