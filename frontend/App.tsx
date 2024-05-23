import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import ProfileScreen from './src/components/ProfileScreen';
import ConversationScreen from './src/components/ConversationScreen'; 
import ConversationsScreen from './src/components/ConversationsScreen';
import SplashScreen from './src/components/SplashScreen'
import theme from './theme';
import { PaperProvider } from 'react-native-paper';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';


export type ParamList = {
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Conversation: { conversationId: string };
  Conversations: undefined;
  Splash: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}

const Stack = createNativeStackNavigator<ParamList>();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Splash'
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.colors?.background },
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Conversation" component={ConversationScreen} />
          <Stack.Screen name="Conversations" component={ConversationsScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </QueryClientProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
