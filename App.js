import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './store/reducers/products'
import ShopNavigator from './navigation/ShopNavigator'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/orders'



const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  
  if(!fontLoaded){
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => {
          setFontLoaded(true)
        }}
      />
    )
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
