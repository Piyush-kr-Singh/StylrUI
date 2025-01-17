import React from 'react';

const Blockview = (props) => {
    const { componentImage, blockHeading, aboutComponent } = props;

    return (
        <section className=' h-[300px]'>
            <main className='px-4 md:px-3 pt-7 md:pt-4 md:pb-4 pb-16'>
                <div className='h-full flex flex-col'>
                    <img src={componentImage} alt={`${blockHeading} image`} className='w-full flex-shrink-0 object-contain h-36 ' />
                    <div className='font-roboto w-full mt-4 text-start flex-grow'>
                        <h1 className='text-[20px] text-gray-700 font-medium font-roboto'>{blockHeading.charAt(0).toUpperCase() + blockHeading.slice(1)}</h1>
                        <p className='text-[13px] pt-2 overflow-hidden font-mulsih font-medium'>{aboutComponent}</p>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Blockview;
