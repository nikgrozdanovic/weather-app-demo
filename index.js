import React from 'react'
import App from './App.js'
import { store } from './src/redux/store.js'

import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo'

const RootComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default registerRootComponent(RootComponent)
