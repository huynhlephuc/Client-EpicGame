import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import Home  from '../Pages/Home/Home';
import Store  from '../Pages/Store/Store';
import Detail from '../Pages/Detail/Detail'


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/store' element={<Store />} />
      <Route path='/home/:id' element={<Detail />} />
    </Routes>
  )
}

export default Routers