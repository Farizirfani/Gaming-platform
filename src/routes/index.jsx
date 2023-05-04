import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/abouts'
import NotFound from '../pages/error/notfound'
import Portfolio from '../pages/portfolio'
import News from '../pages/news'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/news' element={<News />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  )
}

export default Router