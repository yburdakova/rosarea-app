import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DetailsScreen() {
  return (
    <ScrollView>
    <SafeAreaView>
      <Text>
        DetailsScreen
      </Text>
    </SafeAreaView>
  </ScrollView>
  )
}