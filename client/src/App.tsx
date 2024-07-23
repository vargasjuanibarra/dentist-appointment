import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
import { decrement, decrementAsync, decrementBy5, increment, incrementAsync, incrementBy5 } from './store/counter/counterSlice'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
 const count = useSelector((state: RootState) => state.counter.value)
 const loading = useSelector((state: RootState) => state.counter.loading)
 const dispatch = useDispatch<AppDispatch>();

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>
  )
 )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
