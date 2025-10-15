
const ProductOptions = () => {
    return (
        <div className="flex justify-between lg:ml-19">
            <div className="flex w-1/2 px-9 ml-19 items-end">
                <h1 className="text-gray-900 text-3xl px-5 underline underline-offset-5 text-end">NEW</h1>
                <h1 className="text-gray-900 text-center text-3xl"> PRODUCT</h1>
            </div>
            <div className="w-1/2 mt-2 md:text-start text-center ml-2">
                <button className="btn btn-outline btn-secondary px-3 py-2 lg:mr-4 text-md hover:bg-pink-300">All</button>
                <button className="btn btn-outline btn-secondary px-2 py-2 hover:bg-pink-300 lg:mr-4 text-md">Women's</button>
                <button className="px-2 py-2 btn btn-outline btn-secondary hover:bg-pink-300 lg:mr-4 text-md">Men's</button>
                <button className="px-2 py-2 hover:bg-pink-300 btn btn-outline btn-secondary lg:mr-4 text-md">Kid's</button>
                <button className="px-2 py-2 hover:bg-pink-300 btn btn-outline btn-secondary lg:mr-4 text-md">Accessories</button>
                <button className="px-2 py-2 hover:bg-pink-300 btn btn-outline btn-secondary lg:mr-4 text-md">Cosmetics</button>
            </div>
        </div>
    );
};

export default ProductOptions;