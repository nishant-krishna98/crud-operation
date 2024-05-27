import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import Users from './components/Users'
import EditUser from './components/EditUser'
const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Home/>
            <Routes>
                <Route element={<EditUser/>} path='/edit/:id'/>
                <Route element={<CreateUser/>} path='/'/>
                <Route element={<Users/>} path='/users'/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App