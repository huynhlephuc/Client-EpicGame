import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import Home  from '../Pages/Home/Home';
import Store  from '../Pages/Store/Store';


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/store' element={<Store />} />
      {/* <Route path='/market/:id' element={<NftDetails />} /> */}
    </Routes>
  )
}

export default Routers