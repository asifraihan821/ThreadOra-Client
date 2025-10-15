import { ReceiptCent } from 'lucide-react';
import React from 'react';

const MoneyBackGuarantee = () => {
    return (
        <div className='p-9 flex gap-4 items-center ml-5'>
            <div className='text-red-500'>
                <ReceiptCent className='stroke-width-2px size-[50px]'/>
            </div>
            <div>
                <h1 className='text-md font-bold'>Free Shipping</h1>
                <p className='text-md text-gray-500'>for all order over $99</p>
            </div>
        </div>
    );
};

export default MoneyBackGuarantee;