import React from 'react';
const Banner = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center  mx-auto pt-20 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">CarHub BD
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Are you looking for a car? But cannot afford?
                        <br className="hidden md:inline lg:hidden" />CarHub BD is the best place for you to buy your dream car with affordable price
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">Get Started</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Shop Now</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/wwTqQn3/wp2538923.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
