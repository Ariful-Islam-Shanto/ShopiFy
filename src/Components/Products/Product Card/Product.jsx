import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {id, brand, rating, price, thumbnail, title, description} = product;
    console.log(rating);

    const navigate = useNavigate()

    const HandleDetails = () => {
        navigate(`/productDetails/${id}`);
    }


    return (
        <div className="flex flex-col w-full bg-base-100 shadow-xl p-4 space-y-10 rounded-xl">
        <figure className="">
          <img src={thumbnail} alt="phone" className="h-[250px] w-full rounded-xl" />
        </figure>
        <div className="flex flex-grow flex-col items-center text-center space-y-8">
            <div className='flex flex-grow w-full items-center justify-between'>
          <h2 className=" text-2xl text-black font-bold">{title.slice(0, 12)}</h2>
          <h2 className=" text-gray-800 text-sm font-medium">Brand: {brand}</h2>
          </div>
          {/* <p>{description}</p> */}
          <div className='flex justify-between w-full'>
            <p className='text-xl font-medium'>${price}</p >
            <p className='text-xl font-semibold text-gray-600'>Rating: {rating}</p >
          </div>
          <div className="w-full">
            <button onClick={HandleDetails} className="btn w-full bg-blue-400 hover:bg-blue-700 text-white">Show Details</button>
          </div>
        </div>
      </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
}

export default Product;