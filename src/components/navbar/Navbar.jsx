import React, { useState } from 'react'
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
import './NavbarStyles.css'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }

    return (
        <div className='navbar'>
            <div className="container" >
                <div className={slide ? 'logo slide-left' : 'logo'}>
                    <h3>Porsche</h3>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="Exterior" spy={true} smooth={true} duration={500}>Exterior</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="Interior" spy={true} smooth={true} duration={500}>Interior</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="Engine" spy={true} smooth={true} duration={500}>Engine</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="aerodynamics" spy={true} smooth={true} duration={500}>Aerodynamics</Link></a></li>
                </ul>


                <div className="hamburger"  onClick={handleNav} >
                    {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}
                </div>

            </div>
        </div>
    )
}

export default Navbar