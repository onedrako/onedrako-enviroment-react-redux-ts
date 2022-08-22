import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '@redux/reducers/rootReducer'
import thunk from 'redux-thunk'

const composeEnhancers = compose(applyMiddleware(thunk))
const store = createStore(rootReducer, composeEnhancers)

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
