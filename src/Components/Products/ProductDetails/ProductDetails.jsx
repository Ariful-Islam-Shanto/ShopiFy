import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const card = useLoaderData();
    const {id,images, brand, rating, price, thumbnail, title, description} = card;
    return (
        <div className='flex py-12 gap-6 px-12 bg-[#2b0a79]'>
        <div className="flex flex-1 flex-col w-full bg-base-100 shadow-xl p-4 space-y-10 rounded-xl">
            <div>
            <h2 className="text-center mb-8 text-4xl text-black font-bold">{title.slice(0, 12)}</h2>
        <figure className="">
          <img src={thumbnail} alt="phone" className="h-[300px] w-1/2 mx-auto rounded-xl" />
        </figure>
        </div>
        <div className="flex flex-grow flex-col items-center text-center space-y-8">
            <div className='flex flex-grow w-1/2 items-center justify-between'>
          
          <h2 className=" text-gray-800 text-4xl font-medium">Brand: {brand}</h2>
          </div>
          <p className='text-xl'>{description}</p>
          <div className='flex justify-between w-1/2'>
            <p className='text-xl font-medium'>${price}</p >
            <p className='text-xl font-semibold text-gray-600'>Rating: {rating}</p >
          </div>
          <div className="w-full">
            <button className="btn w-1/2 bg-blue-600 hover:bg-blue-800 text-white">Buy Now</button>
          </div>
        </div>
      </div>

      <div className='flex-1 grid grid-cols-2 gap-4 py-6'>
        {
            images.slice(0, 4).map((image, id )=> <img className='h-[320px] w-full rounded-md' key={id} src={image}></img>)
        }
      </div>
      </div>
    );
};

export default ProductDetails;