import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PaperForm from '../Screens/PaperForm/PaperForm';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import AppHeaderMain from '../Components/Shared/AppHeaderMain/AppHeaderMain';
import AppTheme from '../Config/AppTheme';
import HookForm from '../Screens/Form/HookForm';
import AppRazorPay from '../Components/Shared/AppRazorPay/AppRazorPay';
export default function () {
  const Tab = createBottomTabNavigator();

  const Paper = createStackNavigator();
  const Hook = createStackNavigator();
  const Razor = createStackNavigator();
  const PaperFormNavigation = () => {
    return (
      <Paper.Navigator>
        <Paper.Screen
          name={'PaperForm'}
          options={{header: AppHeaderMain}}
          component={PaperForm}
        />
      </Paper.Navigator>
    );
  };
  const HookFormNavigation = () => (
    <Hook.Navigator>
      <Hook.Screen
        name={'HookForm'}
        options={{title: 'Home', header: AppHeaderMain}}
        component={HookForm}
      />
    </Hook.Navigator>
  );
  const RazorPayNavigation = () => (
    <Razor.Navigator>
      <Razor.Screen
        name={'RazorPay'}
        options={{title: 'Home', header: AppHeaderMain}}
        component={AppRazorPay}
      />
    </Razor.Navigator>
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'PaperForm') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'HookForm') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'RazorPay') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: AppTheme.color.primary,
        inactiveTintColor: AppTheme.color.overlay,
      }}>
      {/* <Tab.Screen name={'PaperForm'} component={PaperFormNavigation} />
      <Tab.Screen name={'HookForm'} component={HookFormNavigation} /> */}
      <Tab.Screen name={'RazorPay'} component={RazorPayNavigation} />
    </Tab.Navigator>
  );
}
// import React, {useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
// import {Image} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import AppTheme from '../Config/AppTheme';
// import PaperForm from '../Screens/PaperForm/PaperForm';
// import HookForm from '../Screens/Form.tsx/HookForm';
// import AppHeaderMain from '../Components/Shared/AppHeaderMain/AppHeaderMain';
// import Loading from '../Screens/Loading/Loading';

// const Tabs = createBottomTabNavigator();
// const Tabs1 = createBottomTabNavigator();
// const HomeStack = createStackNavigator();
// const DetailStack = createStackNavigator();

// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen
//       name="home"
//       component={PaperForm}
//       options={{title: 'Home', header: AppHeaderMain}}
//     />
//   </HomeStack.Navigator>
// );
// const DetailStackScreen = () => (
//   <DetailStack.Navigator>
//     <DetailStack.Screen
//       name="detail"
//       component={HookForm}
//       options={{title: 'Detail', header: AppHeaderMain}}
//     />
//   </DetailStack.Navigator>
// );
// const HomeStackScreen1 = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen
//       name="home"
//       component={PaperForm}
//       options={{title: 'Home', header: AppHeaderMain}}
//     />
//   </HomeStack.Navigator>
// );
// const DetailStackScreen1 = () => (
//   <DetailStack.Navigator>
//     <DetailStack.Screen
//       name="detail"
//       component={HookForm}
//       options={{title: 'Detail', header: AppHeaderMain}}
//     />
//   </DetailStack.Navigator>
// );

// const TabBottom = () => {
//   return (
//     <Tabs.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused
//               ? 'ios-information-circle'
//               : 'ios-information-circle-outline';
//           } else if (route.name === 'detail') {
//             iconName = focused ? 'ios-list-box' : 'ios-list';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: AppTheme.color.primary,
//         inactiveTintColor: AppTheme.color.overlay,
//       }}>
//       <Tabs.Screen name="Home" component={HomeStackScreen} />
//       <Tabs.Screen name="detail" component={DetailStackScreen} />
//     </Tabs.Navigator>
//   );
// };
// const TabBottom1 = () => {
//   return (
//     <Tabs1.Navigator
//       >
//       <Tabs1.Screen name="Home" component={HomeStackScreen1} />
//       <Tabs1.Screen name="detail" component={DetailStackScreen1} />
//     </Tabs1.Navigator>
//   );
// };
// const Drawer = createDrawerNavigator();
// const AuthStack = createStackNavigator();

// export default () => {
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [userToken, setuserToken] = React.useState('fsfss');

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);

//   if (isLoading) {
//     return <Loading />;
//   }
//   return (
//     <NavigationContainer>
//       {userToken ? (
//         <Drawer.Navigator>
//           <Drawer.Screen name="Home" component={TabBottom} />
//           <Drawer.Screen name="Drawer" component={TabBottom1} />
//         </Drawer.Navigator>
//       ) : (
//         <AuthStack.Navigator>
//           <AuthStack.Screen name="home" component={HomeScreen} />
//           <AuthStack.Screen name="detail" component={DetailScreen} />
//         </AuthStack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// };
