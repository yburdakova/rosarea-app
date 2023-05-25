import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text>
          Hello
        </Text>
      </SafeAreaView>
    </ScrollView>
  )
}