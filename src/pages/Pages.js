import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Searched from './Searched'
import Pokemon from './Pokemon'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/searched/:search' element={ <Searched /> } />
      <Route path='/pokemon/:name' element={ <Pokemon /> } />
    </Routes>
  )
}

export default Pages