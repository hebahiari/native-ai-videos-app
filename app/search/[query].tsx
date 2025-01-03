import { View, Text, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAppwrite from '@/lib/useAppwrite'
import SearchInput from '@/components/SearchInput'
import EmptyState from '@/components/EmptyState'
import VideoCard from '@/components/VideoCard'
import { getSearchPosts } from '@/lib/appwrite'
import { useLocalSearchParams } from 'expo-router'

const Search = () => {
  const [refreshing, setRefreshing] = useState(false)
  const { query } = useLocalSearchParams()

  const { data: posts, refetch, isLoading } = useAppwrite(() =>  getSearchPosts(query))

  useEffect(() => {
    refetch()
  }, [query])

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item}/>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4'>
              <View>
                <Text className=' font-pmedium text-sm text-gray-100'>
                  Search Results
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  {query}
                </Text>
              </View>
              <View className='mt-6 mb-8'>
            <SearchInput initialQuery = {query} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos Found'
            subtitle='No videos found for this search query, try a different keyword.'
          />
        )}
      />

    </SafeAreaView>
  )
}

export default Search