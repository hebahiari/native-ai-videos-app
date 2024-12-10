import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants'

const SearchInput = ({ title, otherStyles, handleChangeText, keyboardType, value, placeholder, ...props }) => {

    const [showPassword, setshowPassword] = useState(false)

    return (
        <View className='w-full h-16 px-4 bg-black-100 border-2 rounded-2xl  border-black-200 focus:border-secondary items-center flex-row space-x-4'>
            <TextInput
                className='text-base mt-0.5  text-white flex-1 font-pregular'
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#7b7b8b'
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
            />
            {title === 'Password' && (
                <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                    <Image source={!showPassword ? icons.eye : icons.eyeHide} className='2-6 h-6' resizeMode='contain' />
                </TouchableOpacity>
            )}
            <TouchableOpacity>
                <Image
                    source={icons.search}
                    className='w-5 h-5'
                    resizeMode='contain' />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput