import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import loginScreen from './screens/loginScreen';
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    const { user } = useAuth();
    return (
        <Stack.Navigator>
            {user ? (
                <>
                <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
                </>
            ) : (
                <Stack.Screen 
                name="Login" 
                component={loginScreen}
                />
            )}
            
           
        </Stack.Navigator>
    )
}
