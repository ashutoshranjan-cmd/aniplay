import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <SideBar />
            <div className="layout-container">
                <NavBar/>

            <div className="children">
                {children}
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
