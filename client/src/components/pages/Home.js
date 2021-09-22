import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import Background from "../../assets/img/dashboard.jpg";
import '../../assets/css/style.css';

var sectionStyle = {
    width: "100%",
    height: "850px",
  // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})` 
  };

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        //authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-between">
                <h1 class="logo"><a href="index.html">England Team</a></h1>
                <nav id="navbar" class="navbar">
                    <ul>
                    <li><a class="nav-link scrollto active" href="#home">Home</a></li>
                    <li><a class="nav-link scrollto" href="#team_management">Team management</a></li>
                    <li><a class="nav-link scrollto" href="services">Services</a></li>
                    <li><a class="nav-link scrollto" href="contact">Contact</a></li>
                    <li class="dropdown"><a href="#"><span>Sign</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="/register">Sign Up</a></li>
                        <li><a href="/login">Sign In</a></li>
                    </ul>
                </li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>
            <section id="hero">
                <div class="hero-container">
                <h3>Welcome to <strong>Accrington Stanley</strong></h3>
                <h1>We're Creative Miracle</h1>
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
        </div>
        // <div className='grid-2'>
        //     <div>
        //         <ContactForm/>
    
        //     </div>
        //     <div>
        //         <ContactFilter />
        //         <Contacts />
        //     </div>
        // </div>
    );
};

export default Home
