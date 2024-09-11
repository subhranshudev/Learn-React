import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider >
      <h1>React with Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
