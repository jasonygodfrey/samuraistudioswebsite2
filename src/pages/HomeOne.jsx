import React, { useRef, useState, useEffect } from "react";

// Import styles and components
import "../scss/components/section.scss";
import "../scss/components/box.scss";
import Slider from "../components/slider";
import dataSlider from "../assets/fake-data/data-slider";
import About from "../features/about";
import Project from "../features/project";
import dataProject from "../assets/fake-data/dataProject";
import dataAbout from "../assets/fake-data/data-about";
import RoadMap from "../features/roadmap";
import dataRoadmap from "../assets/fake-data/data-roadmap";
import Work from "../features/work";
import dataWork from "../assets/fake-data/data-work";
import Team from "../features/team";
import dataTeam from "../assets/fake-data/data-team";
import Blog from "../features/blog";
import dataBlog from "../assets/fake-data/data-blog";
import Partner from "../features/partner";
import dataPartner from "../assets/fake-data/data-partner";
import FAQ from "../features/faq";
import dataFaq from "../assets/fake-data/data-faq";
import ThreeBackground from "../components/ThreeBackground";
import PageTitle from "../components/pagetitle";
import { Link } from "react-router-dom";
import img1 from "../assets/images/background/bg-ft.png";
import img2 from "../assets/images/background/bg-ft2.png";

function HomeOne(props) {
  const threeBackgroundRef = useRef(null);

  // State to hold the dynamic style for the Project component
  const [projectStyle, setProjectStyle] = useState({
    position: "relative",
    top: "-400px",
  });
  const [isVisible, setIsVisible] = useState(false); // State for visibility of scroll button

  // Effect to update style based on window size
  useEffect(() => {
    const updateStyle = () => {
      if (window.innerWidth <= 768) {
        setProjectStyle({ position: "relative", top: "-150px" });
      } else {
        setProjectStyle({ position: "relative", top: "-400px" });
      }
    };

    const toggleVisibility = () => {
      // Check if scroll button should be visible
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener("resize", updateStyle);
    window.addEventListener("scroll", toggleVisibility);

    updateStyle(); // Initial style update

    return () => {
      window.removeEventListener("resize", updateStyle);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to top functionality
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const homeStyle = {
    position: "relative",
    zIndex: 1,
    background: "radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5))", // Creates a vignette effect
    minHeight: "100vh", // Ensure it covers the full viewport height
    background:
      "radial-gradient(circle, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)",
  };

  // In your HomeOne or equivalent component
  const contactFormRef = useRef(null); // Set this ref on your contact form

  const scrollToContact = () => {
    contactFormRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="home-1" style={homeStyle}>
      <ThreeBackground
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          zIndex: -1,
          objectFit: "cover",
        }}
      />
      <Slider data={dataSlider} />

      <div style={projectStyle}></div>
      <About data={dataAbout} style={{ position: "relative", top: "0px" }} />
      {/*   <Project data={dataProject} /> */}
      {/*  <Blog data={dataBlog} /> */}
      {/* Uncomment these sections if needed */}
      {/* <RoadMap data={dataRoadmap} /> */}
      {/* <Work data={dataWork} /> */}
      {/* <Team data={dataTeam} /> */}
      {/* <Partner data={dataPartner} /> */}
      {/* <FAQ data={dataFaq} /> */}
      
      <section 
    className="tf-section tf-contact" 
    style={{ backgroundColor: 'black', color: 'white' }} // Inline styling for black background and white text
>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="content-about m-b50 mobie-40" data-aos="fade-right" data-aos-duration="800">
                    <div className="tf-title st2 m-b17">
                        <h4 className="title" style={{ textAlign: "center" }}>Contact</h4>
                        
                    </div>
                    <p style={{ textAlign: "center" }}>Get in touch for more info or collaborations:</p>
                    <p style={{ textAlign: "center" }}>chest</p>

                    <p className="m-r-40">
                        <ul className="widget-social">
                            <li>
                            <a href="https://www.linkedin.com/in/jasong7/" target="_blank" rel="noopener noreferrer">
    <svg width="50" height="50" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg) scaleX(-1)' }}>
        <path d="M416 416c17.5996 0 32 -14.5 32 -32.2998v-383.4c0 -17.7998 -14.4004 -32.2998 -32 -32.2998h-384.1c-17.6006 0 -31.9004 14.5 -31.9004 32.2998v383.4c0 17.7998 14.2998 32.2998 31.9004 32.2998h384.1zM135.4 32h0.0996094v213.8h-66.5v-213.8h66.4004zM102.2 275c21.2998 0 38.5 17.2002 38.5 38.5c0 21.2002 -17.2998 38.5 -38.5 38.5c-21.2998 0 -38.5 -17.2998 -38.5 -38.5s17.2002 -38.5 38.5 -38.5zM384.3 32v117.2c0 57.5996 -12.5 101.899 -79.7002 101.899c-32.2998 0 -54 -17.6992 -62.8994 -34.5h-0.900391v29.2002h-63.7002v-213.8h66.4004v105.8c0 27.9004 5.2998 54.9004 39.9004 54.9004c34 0 34.5 -31.9004 34.5 -56.7002v-104h66.3994z" fill="white"/>
    </svg>
</a>

                            </li>
                            <li>
                            <a href="https://github.com/jasonygodfrey" target="_blank" rel="noopener noreferrer">
    <svg width="50" height="50" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg) scaleX(-1)' }}>
        <path d="M400 416c26.5 0 48 -21.5 48 -48v-352c0 -26.5 -21.5 -48 -48 -48h-352c-26.5 0 -48 21.5 -48 48v352c0 26.5 21.5 48 48 48h352zM277.3 32.2998c66 22 110.8 84.9004 110.7 158.3c0 91.8008 -74.4004 161.5 -166.2 161.5s-162 -69.6992 -162 -161.5
c0 -73.3994 46.2002 -136.199 112.2 -158.3c8.5 -1.5 11.5 3.7002 11.5 8c0 4.10059 -0.200195 26.7002 -0.200195 40.6006c0 0 -46.3994 -10 -56.0996 19.6992c0 0 -7.60059 19.2002 -18.4004 24.2002c0 0 -15.0996 10.4004 1.10059 10.2002
c0 0 16.3994 -1.2998 25.5 -17.0996c14.5 -25.6006 38.7998 -18.2002 48.2998 -13.9004c1.5 10.5996 5.7998 18 10.5996 22.2998c-37 4.10059 -74.2998 9.5 -74.2998 73.1006c0 18.1992 5 27.2998 15.5996 39c-1.7998 4.39941 -7.39941 22.0996 1.7002 45
c13.9004 4.2998 45.7002 -17.9004 45.7002 -17.9004c13.2002 3.7002 27.5 5.59961 41.5996 5.59961c14.1006 0 28.4004 -1.89941 41.6006 -5.59961c0 0 31.7998 22.2002 45.7002 17.9004c9.09961 -23 3.39941 -40.7002 1.69922 -45
c10.6006 -11.7002 17.1006 -20.8008 17.1006 -39c0 -63.9004 -39 -69 -76 -73.1006c6.09961 -5.2002 11.2998 -15.0996 11.2998 -30.7002c0 -22.2998 -0.200195 -49.8994 -0.200195 -55.2998c0 -4.2998 3.10059 -9.5 11.5 -8zM179.2 93.4004
c-1.90039 -0.400391 -3.7002 0.399414 -3.90039 1.69922c-0.200195 1.5 1.10059 2.80078 3 3.2002c1.90039 0.200195 3.7002 -0.599609 3.90039 -1.89941c0.299805 -1.30078 -1 -2.60059 -3 -3zM169.7 94.2998c0 1.5 -1.7998 2.60059 -3.7002 2.40039
c-2 0 -3.5 -1.10059 -3.5 -2.40039c0 -1.5 1.5 -2.59961 3.7002 -2.39941c2 0 3.5 1.09961 3.5 2.39941zM156 95.4004c-0.400391 -1.30078 -2.40039 -1.90039 -4.09961 -1.30078c-1.90039 0.400391 -3.2002 1.90039 -2.80078 3.2002
c0.400391 1.2998 2.40039 1.90039 4.10059 1.5c2 -0.599609 3.2998 -2.09961 2.7998 -3.39941zM143.7 100.8c0.899414 0.799805 0.399414 2.7998 -0.900391 4.10059c-1.5 1.5 -3.39941 1.69922 -4.2998 0.599609c-1 -0.900391 -0.599609 -2.7998 0.900391 -4.09961
c1.5 -1.5 3.39941 -1.7002 4.2998 -0.600586zM134.6 109.9c1.10059 0.799805 1.10059 2.59961 0 4.09961c-0.899414 1.5 -2.59961 2.2002 -3.69922 1.2998c-1.10059 -0.700195 -1.10059 -2.39941 0 -3.89941c1.09961 -1.5 2.7998 -2.10059 3.69922 -1.5zM128.1 119.6
c0.900391 0.700195 0.700195 2.2002 -0.399414 3.5c-1.10059 1 -2.60059 1.5 -3.5 0.600586c-0.900391 -0.700195 -0.700195 -2.2002 0.399414 -3.5c1.10059 -1 2.60059 -1.5 3.5 -0.600586zM121.4 127c0.399414 0.799805 -0.200195 1.90039 -1.5 2.59961
c-1.30078 0.5 -2.40039 0.200195 -2.80078 -0.399414c-0.399414 -0.900391 0.200195 -2 1.5 -2.60059c1.10059 -0.699219 2.40039 -0.5 2.80078 0.400391z" fill="white"/>
    </svg>
</a>

                            </li>
                            <li>
                                <Link to="#">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" fill="white" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>




<footer
  id="footer"
  style={{ backgroundColor: "black", color: "white" }} // Setting background color to black and text color to white for contrast
>
        
        <div className="footer-main">
          <img src={img1} alt="" className="bg1" style={{ opacity: 0.0 }} />
          <img src={img2} alt="" className="bg2" style={{ opacity: 0.0 }} />

          {/*  <div className="container">
                    <ul className="widget-social">
                        <li>
                            <Link to="#">
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.173 4.01621C22.2015 3.3728 22.971 2.35967 23.338 1.16598C22.3715 1.76605 21.3141 2.18875 20.2115 2.41581C18.6828 0.723595 16.2607 0.311787 14.2986 1.41049C12.3365 2.5092 11.3202 4.84642 11.8176 7.11616C7.85881 6.90819 4.17053 4.95138 1.67052 1.73267C0.365817 4.08755 1.03255 7.09789 3.19419 8.61211C2.41252 8.58582 1.64818 8.36436 0.964911 7.96619C0.964911 7.9878 0.964911 8.00941 0.964911 8.03102C0.965363 10.484 2.6175 12.597 4.91519 13.0832C4.19015 13.2896 3.42963 13.32 2.69165 13.172C3.33783 15.2698 5.18545 16.7069 7.29133 16.7498C5.54718 18.1823 3.39322 18.9591 1.17602 18.9553C0.783024 18.9559 0.390336 18.9322 0 18.8845C2.25152 20.3985 4.87202 21.2021 7.54833 21.1992C11.2717 21.226 14.85 19.6899 17.4828 16.9347C20.1156 14.1795 21.5832 10.4349 21.5573 6.53868C21.5573 6.31536 21.5523 6.09325 21.5424 5.87234C22.5067 5.1431 23.3389 4.2397 24 3.20461C23.1017 3.62129 22.1487 3.89486 21.173 4.01621Z" fill="white"/>
                                </svg>                            
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.80176 15.0759C1.80315 21.0155 6.09584 26.0728 11.9262 27.0037V18.5652H8.88176V15.0759H11.9298V12.4196C11.7935 11.161 12.2208 9.90656 13.0957 8.9966C13.9707 8.08664 15.2026 7.61545 16.4574 7.71081C17.358 7.72545 18.2564 7.80616 19.1454 7.95229V10.9213H17.6286C17.1064 10.8524 16.5814 11.026 16.2015 11.3929C15.8216 11.7599 15.6279 12.2806 15.675 12.8084V15.0759H19.0002L18.4686 18.5664H15.675V27.0037C21.9803 26.001 26.4019 20.207 25.7364 13.8191C25.0709 7.43115 19.5513 2.68558 13.1763 3.02033C6.80139 3.35508 1.80277 8.65295 1.80176 15.0759Z" fill="white"/>
                                </svg> 
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.8558 1.15613C28.3645 0.744 27.5929 0.685032 26.7951 1.0019H26.7938C25.9547 1.33498 3.04206 11.0576 2.10931 11.4548C1.93966 11.5131 0.458 12.0601 0.61062 13.2783C0.746864 14.3767 1.93769 14.8316 2.08311 14.884L7.9082 16.8572C8.29466 18.1299 9.71933 22.8253 10.0344 23.8284C10.2309 24.4537 10.5512 25.2754 11.1126 25.4445C11.6051 25.6325 12.0951 25.4607 12.4121 25.2145L15.9735 21.9466L21.7226 26.3822L21.8595 26.4632C22.2499 26.6343 22.6239 26.7198 22.9809 26.7198C23.2566 26.7198 23.5213 26.6686 23.7741 26.5662C24.6355 26.2163 24.98 25.4044 25.016 25.3123L29.3103 3.23038C29.5724 2.05102 29.2082 1.45097 28.8558 1.15613ZM13.0455 17.6465L11.0805 22.8305L9.11541 16.3505L24.1809 5.33444L13.0455 17.6465Z" fill="white"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5957 4.06706C28.3295 2.60091 27.0609 1.5332 25.5888 1.19987C23.3859 0.733724 19.3089 0.400391 14.8978 0.400391C10.4893 0.400391 6.34708 0.733724 4.14153 1.19987C2.67204 1.5332 1.40091 2.5332 1.13468 4.06706C0.865841 5.73372 0.599609 8.06706 0.599609 11.0671C0.599609 14.0671 0.865841 16.4004 1.19994 18.0671C1.46878 19.5332 2.73729 20.6009 4.20679 20.9342C6.54545 21.4004 10.5546 21.7337 14.9657 21.7337C19.3768 21.7337 23.3859 21.4004 25.7246 20.9342C27.1941 20.6009 28.4626 19.6009 28.7314 18.0671C28.9977 16.4004 29.3317 13.9993 29.3996 11.0671C29.2639 8.06706 28.9298 5.73372 28.5957 4.06706ZM11.2906 15.7337V6.40039L19.442 11.0671L11.2906 15.7337Z" fill="white"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.971 0.799805H4.02818C2.13767 0.799805 0.599609 2.33786 0.599609 4.22838V26.1712C0.599609 28.0617 2.13767 29.5998 4.02818 29.5998H25.971C27.8616 29.5998 29.3996 28.0617 29.3996 26.1712V4.22838C29.3996 2.33786 27.8616 0.799805 25.971 0.799805ZM23.2323 13.3641C23.0766 13.3785 22.9189 13.3881 22.7592 13.3881C20.9605 13.3881 19.38 12.4631 18.4604 11.0649C18.4604 14.7328 18.4604 18.9061 18.4604 18.976C18.4604 22.2051 15.8424 24.8231 12.6133 24.8231C9.38429 24.8231 6.76624 22.2051 6.76624 18.976C6.76624 15.747 9.38429 13.1289 12.6133 13.1289C12.7354 13.1289 12.8547 13.1399 12.9747 13.1475V16.0288C12.8547 16.0144 12.7368 15.9925 12.6133 15.9925C10.9649 15.9925 9.62909 17.3283 9.62909 18.9767C9.62909 20.6252 10.9649 21.9609 12.6133 21.9609C14.2618 21.9609 15.7176 20.6622 15.7176 19.0137C15.7176 18.9486 15.7464 5.57786 15.7464 5.57786H18.5002C18.7594 8.04026 20.7473 9.98358 23.2323 10.1619V13.3641Z" fill="white"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.4083 2.56088C22.9162 0.555449 18.9738 0.215503 18.805 0.203274C18.5434 0.181264 18.2939 0.328003 18.1863 0.570123C18.1765 0.584796 18.0909 0.782894 17.9955 1.09105C19.6439 1.36985 21.6689 1.92991 23.5007 3.06713C23.7942 3.24811 23.8847 3.63452 23.7037 3.928C23.5838 4.12121 23.3809 4.22637 23.1705 4.22637C23.058 4.22637 22.9431 4.19458 22.8404 4.13099C19.6904 2.17692 15.7578 2.07909 14.9996 2.07909C14.2415 2.07909 10.3064 2.17692 7.15885 4.13099C6.86537 4.31442 6.47896 4.22393 6.29798 3.93045C6.11456 3.63452 6.20504 3.25056 6.49852 3.06713C8.33032 1.93235 10.3553 1.36985 12.0037 1.09349C11.9083 0.782895 11.8227 0.587242 11.8154 0.570123C11.7053 0.328003 11.4583 0.176373 11.1942 0.203274C11.0254 0.215503 7.08303 0.555448 4.55668 2.58779C3.23847 3.80817 0.599609 10.9397 0.599609 17.1052C0.599609 17.2152 0.628957 17.3204 0.682762 17.4158C2.50233 20.6147 7.46945 21.4511 8.60178 21.4878C8.60668 21.4878 8.61401 21.4878 8.62135 21.4878C8.82189 21.4878 9.01021 21.3924 9.1276 21.231L10.2722 19.656C7.1833 18.8587 5.60586 17.5038 5.51537 17.4231C5.25613 17.1957 5.23167 16.7995 5.46157 16.5402C5.68901 16.281 6.08521 16.2565 6.34445 16.484C6.38113 16.5182 9.28657 18.9834 14.9996 18.9834C20.7224 18.9834 23.6279 16.5084 23.6572 16.484C23.9165 16.259 24.3102 16.281 24.5401 16.5427C24.7675 16.8019 24.7431 17.1957 24.4838 17.4231C24.3934 17.5038 22.8159 18.8587 19.7271 19.656L20.8716 21.231C20.989 21.3924 21.1773 21.4878 21.3779 21.4878C21.3852 21.4878 21.3925 21.4878 21.3974 21.4878C22.5298 21.4511 27.4969 20.6147 29.3165 17.4158C29.3703 17.3204 29.3996 17.2152 29.3996 17.1052C29.3996 10.9397 26.7607 3.80817 25.4083 2.56088ZM10.93 14.6008C9.71945 14.6008 8.73874 13.4807 8.73874 12.0965C8.73874 10.7122 9.71945 9.59213 10.93 9.59213C12.1406 9.59213 13.1213 10.7122 13.1213 12.0965C13.1213 13.4807 12.1406 14.6008 10.93 14.6008ZM19.0692 14.6008C17.8586 14.6008 16.8779 13.4807 16.8779 12.0965C16.8779 10.7122 17.8586 9.59213 19.0692 9.59213C20.2798 9.59213 21.2605 10.7122 21.2605 12.0965C21.2605 13.4807 20.2798 14.6008 19.0692 14.6008Z" fill="white"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                  
                  {/*  <h5 className="heading">don’t miss out, join now for early access</h5>
                    <p>Maewrwedfdecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut </p>
                    <form action="#" id="subscribe-form">
                        <input type="email" placeholder="Enter your email address" required="" id="subscribe-email" />
                        <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button"> <span className="effect">Subscribe</span></button>
                    </form> 
                </div>  */}
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div
              className="wrap-fx"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            <p style={{ textAlign: "center" }}>
    Thank you for visiting!
    <img src="/smile.png" alt="smile" style={{ width: "74px", verticalAlign: "middle" }} />
</p>

            </div>
          </div>
        </div>

        {isVisible && (
          <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>
        )}
      </footer>
    </div>
  );
}

export default HomeOne;
