import React from 'react';
import { SiAzuredataexplorer } from "react-icons/si";
import { Link } from 'react-router-dom';

const LandingPageButtons = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <div className='w-full'>
            <div className='max-w-[400px] flex flex-col md:flex-row gap-4 md:gap-8 mx-auto'>
                <Link
                    to="/docs"
                    onClick={scrollToTop}
                    className="inline-flex items-center justify-center px-6 py-2 text-base font-roboto font-bold tracking-wider leading-6 text-white whitespace-no-wrap bg-orange-500 border border-orange-500 rounded-lg shadow-sm hover:bg-orange-600  transition-all duration-100"
                    data-rounded="rounded-md"
                    data-primary="blue-600"
                    data-primary-reset="{}"
                >
                    Get Started
                </Link>

                <Link
                    to="/blocks"
                    onClick={scrollToTop}
                    className="tracking-wider font-roboto font-bold inline-flex items-center justify-center px-6 py-2 text-base leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none hover:text-orange-500 transition-all duration-100"
                >
                    <SiAzuredataexplorer className='pr-4 text-[32px]' />
                    Explore Blocks
                </Link>
            </div>
        </div>
    )
}

export default LandingPageButtons;
