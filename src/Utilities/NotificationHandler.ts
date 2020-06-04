import messaging from '@react-native-firebase/messaging';

class NotificationHandler {
  public fcmToken: string;
  private removeNotificationOpenedListener: any;
  private removeNotificationListener: any;
  private onTokenRefreshListener: any;

  constructor() {
    this.fcmToken = '';
  }

  public async init() {
    await messaging().registerForRemoteNotifications();
    try {
      const enabled = messaging().requestPermission();
      if (enabled) {
        this.setToken();
        console.log('User granted messaging permissions!');
      } else {
        console.log('User declined messaging permissions :(');
      }
    } catch (error) {}
  }

  private async setToken() {
    const fcmTokenString = await messaging().getToken();
    if (fcmTokenString) {
      this.fcmToken = fcmTokenString;
      console.log('FCM TOKEN', this.fcmToken);
    } else {
      this.init();
    }
  }

  public getToken() {
    return this.fcmToken;
  }

  public async listenNotificationsForeground(callBack: Function) {
    this.removeNotificationListener = messaging().onMessage(
      async remoteMessage => {
        console.log('FCM Message Data:', remoteMessage.data);
      },
    );
  }

  public removeListeners() {
    if (this.removeNotificationOpenedListener)
      this.removeNotificationOpenedListener();
    if (this.removeNotificationListener) this.removeNotificationListener();
    if (this.onTokenRefreshListener) this.onTokenRefreshListener();
  }
}

export default new NotificationHandler();
