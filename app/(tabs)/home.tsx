import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAppwrite from '@/lib/useAppwrite'

import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'
import VideoCard from '@/components/VideoCard'
import { getAllPosts, getLatestPosts } from '@/lib/appwrite'
import { useGlobalContext } from '@/context/GlobalProvider'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
  const {user, setUser, setIsLoggedIn} = useGlobalContext()

  const { data: posts, refetch, isLoading } = useAppwrite(getAllPosts)
  const { data: latestPosts } = useAppwrite(getLatestPosts)


  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item}/>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className=' font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  {user?.username}
                </Text>
              </View>
              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  resizeMode='contain'
                  className='w-9 h-10' />
              </View>
            </View>
            <SearchInput
              placeholder='Search for a video topic' />
            <View className='w-full pb-8 pt-5 flex-1'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>
                Latest Videos
              </Text>
              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos Found'
            subtitle='Be the first to upload a video!'
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} />
        }
      />

    </SafeAreaView>
  )
}

export default Home