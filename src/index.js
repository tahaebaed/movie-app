import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import store from './store/store'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
      <ToastContainer position='bottom-right' theme='dark' />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
