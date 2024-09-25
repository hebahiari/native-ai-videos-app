import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';


export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-yellow-400">
      <Text className='text-3xl font-pblack'>
        Heba's New App!
      </Text>
      <Link href='/home' style={{color: 'blue'}}>Home</Link>
    </View>
    );
}

