import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { ActivityIndicator } from 'react-native'
import { View, StyleSheet } from 'react-native'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
})

export default App
