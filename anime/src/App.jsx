import { useState } from 'react'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Video from './pages/Video'
import Login from './start/Login'
import Signup from './start/Signup'
import Manga from './pages/Manga'
import Movie from './pages/Movie'
import Forget from './start/Forget'
import Auth from './auth/Auth'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget' element={<Forget />} />
          <Route element={<Auth />}>
            <Route path='/home' element={<Home />} />
            <Route path='/video' element={<Video />} />
            <Route path='/manga' element={<Manga />} />
            <Route path='/movies' element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
