import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import classes from './Layout.module.css'


const Layout = props => {
    const { children } = props

    const [isSidenavOpen, setIsSidenavOpen] = useState(false)
    const openSidenav = () => setIsSidenavOpen(true)
    const closeSidenav = () => setIsSidenavOpen(false)


    return (
        <div className={classes.Container}>
            <Navbar isSidenavOpen={isSidenavOpen} openSidenav={openSidenav}/>
            {children}
            <Sidebar isSidenavOpen={isSidenavOpen} closeSidenav={closeSidenav}/>
        </div>
    )
}

export default Layout