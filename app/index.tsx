import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';


export default function HomeScreen() {
  return (
    <View className='flex-1'>
      <Text className='text-3xl'>
        Heba's New App!
      </Text>
      <Link href='/profile' style={{color: 'blue'}}>Profile</Link>
    </View>
    );
}

