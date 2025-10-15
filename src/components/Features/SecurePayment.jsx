import { ShieldCheck } from 'lucide-react';
import React from 'react';

const SecurePayment = () => {
    return (
       <div className='p-9 flex gap-4 items-center ml-5'>
            <div className='text-red-500'>
                <ShieldCheck className='stroke-width-2px size-[60px]'/>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Free Shipping</h1>
                <p className='text-md text-gray-500'>for all order over $99</p>
            </div>
        </div>
    );
};

export default SecurePayment;