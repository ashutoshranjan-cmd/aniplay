import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Hamburger from 'hamburger-react'
import { FiHome } from "react-icons/fi";
import { LiaFileVideoSolid } from "react-icons/lia";
import { SiBookstack } from "react-icons/si";
import { MdOutlineLocalMovies } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { FaRegImages } from "react-icons/fa6";
import { CgGames } from "react-icons/cg";
import { useState } from 'react';
const SideBar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="sidebar" >
        <Sidebar collapsed={!isOpen}  style={{ display: 'flex', height: '100%',color:'white',position:'fixed',zIndex:'1000'}} collapsedWidth='4rem' backgroundColor='#0F0F16'>
        <Menu style={{width:'30rem'}}>
                <div className="hamburger" >
                 <Hamburger toggled={isOpen} toggle={setOpen} />
                 </div>
                 <div className="menu-item">
                <MenuItem className='item' icon={<FiHome/>}><NavLink to={"/home"}>Home</NavLink></MenuItem>
                <MenuItem className='item' icon={<LiaFileVideoSolid />}><NavLink to={"/video"}>Videos</NavLink></MenuItem>
                <MenuItem className='item' icon={<SiBookstack />}><NavLink to={"/manga"}>Manga</NavLink></MenuItem>
                <MenuItem className='item'  icon={<MdOutlineLocalMovies />}><NavLink to="/movies">Movies</NavLink></MenuItem>
                <MenuItem className='item'  icon={<CgGames />}><NavLink to="/movies">Games</NavLink></MenuItem>
                <MenuItem className='item'  icon={<FaRegImages />}><NavLink to="/movies">Wallpapers</NavLink></MenuItem>
                <MenuItem  className='item' icon={<FcAbout />}>About</MenuItem>
                {/* <SubMenu label="Charts" >
                    <MenuItem> Home</MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu> */}
        </div>
               
            </Menu>
        </Sidebar>
        </div>
    )
}

export default SideBar
