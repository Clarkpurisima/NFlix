import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon,color,name,focused}) =>{
    return(
        <View>
            <Image
             source={icon}
             resizeMode="contain"
             style= {{
                width: 24,
                height: 19,
                tintColor: {color}
             }}
             
            />
        </View>
    )
}
 

// const TabsLayout = () => {
//   return (
//     <View>
//       <Text>TabsLayout</Text>
//     </View>
//   )
// }

const TabLayout = () =>{
    return(
        <>
            <Tabs>
           
            <Tabs.Screen
                name="home"
                options={{
                    title:'Home',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon={icons.home}
                        color={color}
                        name="Home"
                        focused={focused}
                        />
                    )
                }}
            />

           
            <Tabs.Screen
                name="bookmark"
                options={{
                    title:'Bookmark',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon={icons.bookmark}
                        color={color}
                        name="Bookmark"
                        focused={focused}
                        />
                    )
                }}
            />

           <Tabs.Screen
                name="downloads"
                options={{
                    title:'Downloads',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon={icons.downloads}
                        color={color}
                        name="Downloads"
                        focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title:'Profile',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon={icons.profile}
                        color={color}
                        name="Profile"
                        focused={focused}
                        />
                    )
                }}
            />


            </Tabs>        

        </>
    )
}

export default TabLayout