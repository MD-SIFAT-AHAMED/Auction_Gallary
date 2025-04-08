import React from 'react';

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto px-4 text-left'>
                <div className='pt-20 pb-20 space-y-2 text-center'>
                    <h3 className='text-xl md:text-3xl'><span className=' text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></h3>
                    <ul className='flex justify-center gap-3 text-xl'>
                        <li>Bid.</li>
                        <li>Win.</li>
                        <li>Own.</li>
                    </ul>
                    <ul className='flex flex-wrap justify-center gap-5 text-xl cursor-pointer'>
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>
                    <p className='text-lg'>©2025 AuctionHub.All rights reserved.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;