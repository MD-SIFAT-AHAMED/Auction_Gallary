import React, { use, useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
const Products = ({prductPromise}) => {
    
    const products = use(prductPromise);

    const [bookItem,setBookItem] = useState([]);
    const [totalBid,setTotalBid] = useState((0));
    const [bookmarkColor,setBookmarkColor] = useState([]);
    

    const handlerBookmark =(product)=>{

        if(bookmarkColor.includes(product.id)) return;

        const newBookItem = [...bookItem,product];
        setBookItem(newBookItem);
        const total = totalBid + product.currentBidPrice;
        setTotalBid(total);
        itemAddedToFavoriteList();
        setBookmarkColor([...bookmarkColor,product.id]);
        
    }
    
    const handlerRemoveBookmark = (id,price)=>{
       const items = bookItem.filter(product => product.id !== id);
       setBookItem(items);
       const total = totalBid - price;
       setTotalBid(total);
       itemRemoveToFavoriteList();
       const bookmarkItem = bookmarkColor.filter( item => item !== id);
       setBookmarkColor(bookmarkItem);
    }

    const itemAddedToFavoriteList = () => {
        toast.success('Item Added to Your Favorite List!', {
          position: 'top-right',
        });
      };

    const itemRemoveToFavoriteList = () => {
    toast.warn('Item Remove to Your Favorite List!!', {
        position: 'top-right',
    });
    };
    
    return (
        <div className='w-full bg-[#EBF0F5]'>
            <div className='max-w-screen-xl mx-auto px-4 pb-20'>
                <div className='pt-10 pb-10'>
                    <h2 className='text-[#0E2954] text-2xl font-semibold'>Active Auctions</h2>
                    <p className='text-[#000000] text-lg'>Discover and bid on extraordinary items</p>
                </div>
                <div className='md:flex gap-5'>

                    <div className='md:w-[70%] h-fit bg-white rounded-3xl p-3'>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Items</th>
                                    <th>Current Bid</th>
                                    <th>Time Left</th>
                                    <th>Bid Now</th>
                                </tr>
                                </thead>
                                
                                {
                                    products.map(product=> 
                                    <tbody key={product.id} className='border-b-1 border-[#DCE5F3]'>
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                        src={product.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                    </div>
                                                    <div>
                                                    <div className="font-bold">{product.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center'>
                                               ${product.currentBidPrice}
                                            </td>
                                            <td className='text-center'>{product.timeLeft}</td>
                                            <td>
                                                <FaHeart onClick={()=> handlerBookmark(product)} className={`mx-auto  ${bookmarkColor.includes(product.id) ? "cursor-not-allowed  text-red-600":"cursor-pointer"}`}  size={20}/>
                                            </td>
                                        </tr>    
                                    </tbody>  )
                                }
                            </table>
                        </div>
                    </div>

                    <div className='md:w-[30%] h-fit mt-4 md:mt-0 rounded-3xl bg-white'>
                        <div className='text-center border-b-1 border-[#DCE5F3] pt-4 pb-3'>
                            <h3 className='text-2xl font-semibold text-[#0E2954]'><FaRegHeart className='inline mr-1' /> Favorite Items</h3>
                        </div>
                        {bookItem.length !== 0 ? <div></div> : <div className='text-center space-y-4 pt-10 pb-10'>
                            <h3 className='text-2xl'>No favorites yet</h3>
                            <p className='text-lg'>Click the heart icon on any item <br /> to add it to your favorites</p>
                        </div>}
                        <div>
                            {
                                bookItem.map(product => <div className='grid grid-cols-5 border-1 border-[#DCE5F3] px-4 py-5 gap-3'>
                                    <div>
                                        <img className='w-[70px] h-[70px] object-cover rounded-xl' src={product.image} alt="" />
                                    </div>
                                    <div className='text-base text-[#0E2954] col-span-3'>
                                        <h1 className='font-semibold'>{product.title}</h1>
                                        <p className='inline mr-3'>${product.currentBidPrice}</p> <p className='inline'>Bids: {product.bidsCount}</p>
                                    </div>
                                    <div 
                                    onClick={()=> handlerRemoveBookmark(product.id,product.currentBidPrice)}
                                    className='text-2xl cursor-pointer hover:text-red-700'><IoCloseSharp /></div>
                                </div>)
                            }
                        </div>
                        <div className='flex justify-around text-[26px] border-t-1 border-[#DCE5F3] pt-5 pb-5'>
                            <h3>Total bids Amount :</h3>
                            <h3>${totalBid}</h3>
                        </div>
                    </div>
                </div> 
            </div>
            <ToastContainer />
        </div>
    );
};

export default Products;