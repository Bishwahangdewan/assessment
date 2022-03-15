import React from 'react';

import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo3.png';
import Logo3 from '../../assets/logo4.png';
import Logo4 from '../../assets/logo5.png';

import './Partner.styles.scss';

function Partner() {
    return (
        <section className='partner-container'>

            <h3>Trusted By Leading Dapp Teams and Enterprises</h3>

            <div className="company-logos">
                <div className="partner-img-container"><img src={Logo1} alt="logo1" className="one" /></div>
                <div className="partner-img-container"><img src={Logo3} alt="logo3" className="two" /></div>
                <div className="partner-img-container"><img src={Logo2} alt="logo2" className="three" /></div>
                <div className="partner-img-container"><img src={Logo4} alt="logo3" className="four" /></div>
            </div>

        </section>
    )
}

export default Partner;
