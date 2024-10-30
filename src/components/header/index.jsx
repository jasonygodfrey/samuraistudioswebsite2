import React , { useState , useEffect } from 'react';

import { Link , NavLink } from 'react-router-dom';
import menus from '../../pages/menu';

import './styles.scss';
import logo from '../../assets/images/logo/logo.png'
import Button from '../button';



const Header = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };


     // Determine the screen width
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

     useEffect(() => {
         const handleResize = () => {
             setWindowWidth(window.innerWidth);
         };
 
         window.addEventListener('resize', handleResize);
 
         // Clean up the event listener when the component unmounts
         return () => window.removeEventListener('resize', handleResize);
     }, []);
 
     // Define the logo style based on the screen width
     const logoStyle = {
         width: windowWidth > 768 ? '25%' : '80%', // Adjust '50%' as needed for mobile
         height: 'auto'
     };
 

    return;
}

export default Header;