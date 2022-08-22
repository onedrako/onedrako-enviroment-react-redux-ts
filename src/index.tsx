// Dependencies
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Redux
import { applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from '@redux/reducers/rootReducer'

// Components
import App from './App'

const composeEnhancers = compose(applyMiddleware(thunk))
const store = configureStore({ reducer: rootReducer, enhancers: [composeEnhancers] })

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}
