import React from 'react'
import ReactDOM from 'react-dom/client'
import Helloworld from './components/helloworld'
import Pokemon from './components/pokemon'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helloworld/>
    <Pokemon/>
  </React.StrictMode>,
)
