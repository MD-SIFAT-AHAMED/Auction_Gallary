import React from 'react';
import img from '../../assets/Banner-min.jpg';
const Banner = () => {
    return (
        <div className='w-full bg-cover bg-center flex items-center h-[530px]' style={{backgroundImage:`url(${img})`}}>
            <div className='max-w-screen-xl mx-auto px-4 w-full'>
                <div className='text-white space-y-4 text-left'>
                    <h2 className='text-3xl md:text-5xl font-semibold'>Bid on Unique Items from <br />
                    Around the World</h2>
                    <p className='text-lg md:text-xl text-gray-400 font-normal'>Discover rare collectibles, luxury goods, and <br />
                    vintage treasures in our curated auctions</p>
                    <button className='btn rounded-2xl'>Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;