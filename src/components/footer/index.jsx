import React , { useState ,useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom'

import img1 from '../../assets/images/background/bg-ft.png'
import img2 from '../../assets/images/background/bg-ft2.png'


function Footer(props) {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer id="footer">
           
        </footer>
    );
}

export default Footer;