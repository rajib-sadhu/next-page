import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const {isbn13, title, subtitle, price, image } = book;
    // opacity-0 hover:opacity-100
    return (
        <div className='shadow-2xl w-full relative overflow-hidden rounded-md transition duration-300 hover:-translate-y-2'>

            <img src={image} className='object-cover w-full' alt="" />

            <div className='absolute bg-black opacity-0 hover:opacity-100 duration-500 bg-opacity-75 text-white inset-0 p-5'>
                <div className='space-y-5'>
                <h1 className='md:text-3xl text-lg font-semibold'>{title}</h1>
                <p>{subtitle.substring(0,60)}...</p>
                <p className='md:text-3xl text-lg font-bold'>{price}</p>
                </div>
                <div className='space-x-3 absolute bottom-5'>
                    <button className='bg-red-600 px-2 pb-1 rounded-md text-xl '>Cart <HiShoppingCart className='inline' /></button>
                    <Link to={`/book/${isbn13}`} className='bg-red-600 px-2 pb-1 rounded-md text-xl '>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Book;