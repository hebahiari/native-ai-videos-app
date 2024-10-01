import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form, setform] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submitSignIn = () => {

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
          >Log in to Aora</Text>
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
            handlePress={submitSignIn}
            isLoading={isSubmitting}
            containerStyles='mt-10'
          />

          <View className='justify-center gap-2 pt-5 flex-row'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have an account?
            </Text>
            <Link href='/sign-up' className='text-lg text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn