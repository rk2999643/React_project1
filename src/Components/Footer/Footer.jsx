import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className='foot-container'>
                <div className='Sub-cont1'>
                    <h1>The Siren</h1>
                    <ion-icon name="logo-facebook" className='fb' ></ion-icon> 
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-youtube"></ion-icon>

                </div>

                <div className='Sub-cont2'>
                    <h2>About Us</h2><br/>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Reprehenderit dolorem eius ut nemo quidem maxime  </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Reprehenderit dolorem eius ut nemo quidem maxime  </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Reprehenderit dolorem eius ut nemo quidem maxime  </p>
                   
                </div>

                <div className='Sub-cont3'>
                    <h2>Components</h2><br/>
                <p>BollyWood</p>
                    <p>Hollywood</p>
                    <p>Technology</p>
                    <p>Food</p> 
                    <p>Health</p>
                </div>
                <div className='Sub-cont4'>
                    <h2>Contact Us</h2>
                    <h4>+ 84-3554856</h4>
                </div>

            </div>


        </>
    );
}

export default Footer;