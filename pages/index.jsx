import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'
import '/index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Vans, { loader as vansLoader } from './Vans/Vans.jsx'
import VanDetail from './Vans/VanDetail.jsx'
import Layout from '../components/Layout'
import Income from "/pages/Host/Income.jsx"
import Reviews from "/pages/Host/Reviews.jsx"
import Dashboard from "/pages/Host/Dashboard.jsx"
import HostLayout from '../components/HostLayout.jsx'
import YourArtwork from './Host/YourArtwork.jsx'
import YourArtDetail from './Host/YourArtDetail.jsx'
import YourArtInfo from './Host/YourArtInfo.jsx'
import YourArtPhotos from './Host/YourArtPhotos.jsx'
import YourArtPricing from './Host/YourArtPricing.jsx'
import NotFound from './NotFound.jsx'
import Error from '../components/Error.jsx'
import Login from './Login.jsx'

const router = createBrowserRouter(createRoutesFromElements( 
  <Route element={<Layout />}> 
    <Route path="/" element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path='vans/:id' element={<VanDetail/> }/>
    <Route path='dashboard' element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='income' element={<Income />}/>
      <Route path='reviews' element={<Reviews />}/>
      <Route path="yourartwork" element={<YourArtwork />}/>
      <Route path="yourartwork/:id" element={<YourArtDetail />}>
        <Route index element={<YourArtInfo />} />
        <Route path="photos" element={<YourArtPhotos />} />
        <Route path="pricing" index element={<YourArtPricing />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App(){ 

  return (
    <RouterProvider router={router}/>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />);
