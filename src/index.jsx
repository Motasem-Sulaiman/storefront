import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/index.jsx';

function Main() {
  return (
      <Provider store={store}>
          <App />
      </Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
  </React.StrictMode>,
)
