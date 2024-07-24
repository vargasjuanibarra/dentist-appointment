import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import ClinicPage from './pages/ClinicPage'
import DentistsPage from './pages/DentistPage'

function App() {


 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/clinic" element={<ClinicPage />} />
      <Route path="/dentist" element={<DentistsPage />} />
    </Route>
  )
 )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
