import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import {icons} from "../../constants"

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image 
            source={icon}
            resizeMode='contain'
            tintColor={color}
            className='w-[6] h-[6]'/>
            <Text className = {`${focused? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
<>
<Tabs
    screenOptions={{
        tabBarShowLabel: false
    }}
>
    <Tabs.Screen 
    name='home'
    options={{
        headerShown: false,
        title: 'Home',
        tabBarIcon: ({color, focused}) => (
            <TabIcon 
            icon={icons.home}
            color ={color}
            name="Home"
            focused={focused}
            />
        )
    }}/>
    <Tabs.Screen 
    name='bookmark'
    options={{
        headerShown: false,
        title: 'Bookmark',
        tabBarIcon: ({color, focused}) => (
            <TabIcon 
            icon={icons.bookmark}
            color ={color}
            name="Bookmark"
            focused={focused}
            />
        )
    }}/>
    <Tabs.Screen 
    name='create'
    options={{
        headerShown: false,
        title: 'Create',
        tabBarIcon: ({color, focused}) => (
            <TabIcon 
            icon={icons.plus}
            color ={color}
            name="Create"
            focused={focused}
            />
        )
    }}/>

<Tabs.Screen 
    name='profile'
    options={{
        headerShown: false,
        title: 'Profile',
        tabBarIcon: ({color, focused}) => (
            <TabIcon 
            icon={icons.profile}
            color ={color}
            name="Profile"
            focused={focused}
            />
        )
    }}/>
</Tabs>
</>
  )
}

export default TabsLayout