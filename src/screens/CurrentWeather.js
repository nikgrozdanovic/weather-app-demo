import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'
import { useSelector } from 'react-redux'

const CurrentWeather = () => {
  const storedWeatherData = useSelector((state) => state.weatherData.value)
  const weatherData = storedWeatherData.list[0]

  const {
    container,
    tempri,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    wrapper,
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData
  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color='white'
        />
        <Text style={tempri}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low: ${temp_min}°`}
          containerStyle={highLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyle={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempri: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
})

export default CurrentWeather
