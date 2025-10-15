import React from 'react';
import FreeShipping from './FreeShipping';
import MoneyBackGuarantee from './MoneyBackGuarantee';
import OnlineSupport from './OnlineSupport';
import SecurePayment from './SecurePayment';

const Features = () => {
    return (
        <div className='px-9 grid lg:grid-cols-4 md:grid-cols-3 md:flex-cols-3 justify-center lg:ml-19'>
            <FreeShipping />
            <MoneyBackGuarantee />
            <OnlineSupport />
            <SecurePayment />
        </div>
    );
};

export default Features;