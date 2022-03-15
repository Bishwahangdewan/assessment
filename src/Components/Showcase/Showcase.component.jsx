import React from 'react';

import './Showcase.styles.scss';

import { ReactComponent as Package } from '../../assets/package.svg';
import { ReactComponent as HeaderPackage } from '../../assets/header-package.svg';
import Logo from '../../assets/bitcoin-logo.png';

import TwitterIcon from '../../assets/twitter.png';
import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';

function Showcase() {
    return (
        <section className="flex showcase">
            <section className="stepper-container">
                <div className="box">
                    <span>PK194-ABI</span>
                    <span>San Fransisco</span>
                    <Package className="package" />
                </div>

                <div className="stepper">
                    <div className="long"></div>
                    <div className="round"></div>
                    <div className="round"></div>
                    <div className="round"></div>
                    <div className="round"></div>
                </div>

            </section>

            <section className="content-container">
                <h1>Merklabs Blockchain<br /> Development and <span><HeaderPackage className='header-package' /></span><br /> Security solutions</h1>
                <p>We provide blockchain development services and also assure you comprehensive security in blockchain development.</p>
                <button>
                    <span>Explore More</span>
                </button>
            </section>




            <section className="hero-img-container">
                <div className="bg-container">
                    {/*<BitCoin className='bitcoin' />*/}
                    <img src={Logo} alt="logo" className='bitcoin' />
                </div>
            </section>

            <section class="social-container">
                <div class="social">
                    <div className="icon-container"><img src={FacebookIcon} alt="facebook" /></div>
                    <div className="icon-container"><img src={InstagramIcon} alt="instagram" /></div>
                    <div className="icon-container"><img src={TwitterIcon} alt="twitter" /></div>
                    <span className="line"></span>
                </div>
            </section>
        </section>

    )
}

export default Showcase;
