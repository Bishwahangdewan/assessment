import React from 'react';

import './Header.styles.scss';

import { ReactComponent as HeaderBg } from '../../assets/Header-bg.svg';

function Header() {
    return (
        <section className="header">
            {/*<HeaderBg className="header-bg" />*/}
            <div className="header-container flex space-between">
                <div className="logo-container">
                    <a className="logo" href="#logo">Merka</a>
                </div>

                <nav>
                    <ul className="flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>

                <div className='button-container'>
                    <button>Connect Wallet</button>
                </div>
            </div>
        </section>
    )
}


export default Header;