import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {

  const [form, setform] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submitSignUp = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full min-h-[85vh] justify-center px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text
            className='text-2xl text-white text-semibold mt-10 font-psemibold'
          >Sign up to Aora</Text>
          <FormField
            title='Username'
            value={form.username}
            handleChangeText={(e) => setform({ ...form, username: e })}
            otherStyles='mt-10'
          />
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardType='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles='mt-7'
          />
          <CustomButton
            title='Sign In'
            handlePress={submitSignUp}
            isLoading={isSubmitting}
            containerStyles='mt-10'
          />

          <View className='justify-center gap-2 pt-5 flex-row'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Have an account already??
            </Text>
            <Link href='/sign-in' className='text-lg text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp