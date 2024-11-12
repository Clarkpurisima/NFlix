import { StyleSheet, Text, View } from 'react-native'
import react from 'react'
import {Slot, Stack} from 'expo-router'
import { useFonts} from 'expo-font'//add this import
import { useEffect } from 'react'//add this import
import { SplashScreen } from 'expo-router'//add this import

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
         "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
       
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown:true
            }}/>
        </Stack>
    )
}

export default MainLayout

