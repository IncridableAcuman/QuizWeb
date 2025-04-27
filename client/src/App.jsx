import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Auth from './pages/auth/Auth'
import Login from './pages/login/Login'
import ForgotPassword from './pages/forgot-password/ForgotPassword'
import ResetPassword from './pages/reset-password/ResetPassword'
import AdminPanel from './pages/admin/AdminPanel'
import Home from './pages/home/Home'
import {ToastContainer} from 'react-toastify'
import Test from './pages/tests/Test'
const App = () => {
  return (
    <>
    <ToastContainer position='bottom-right' />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<AdminPanel/>} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/reset-password' element={<ResetPassword/>} />
      <Route path='/test' element={<Test/>} />
    </Routes>
    </>
  )
}

export default App