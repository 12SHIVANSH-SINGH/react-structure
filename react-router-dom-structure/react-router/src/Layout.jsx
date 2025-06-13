import React from 'react'
import Header from './components/header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'


function Layout() {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout
