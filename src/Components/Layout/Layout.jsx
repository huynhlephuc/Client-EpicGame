import React from 'react';
import Routers from '../../Routers/Router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Layout = (props) => {
  return (
    <>
        <Header />
            <div>
                <Routers />
            </div>
        <Footer />
    </>
  )
}

export default Layout