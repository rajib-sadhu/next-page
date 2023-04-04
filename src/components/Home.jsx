import React from 'react';
import Lottie from 'lottie-react';
import render from '../assets/render.json';
import { Link } from 'react-router-dom';
import {HiShoppingCart} from 'react-icons/hi';

const Home = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:px-28 px-5 mt-3 items-center' >
            <div className='space-y-5 md:w-10/12'>
                <p className='bg-red-500 text-xs px-2 py-1 w-[4rem] text-center text-white rounded-2xl' >SALE!</p>
                <h2 className='md:text-4xl text-3xl uppercase font-bold' >Fuel your passion for <span className='text-red-600'>reading</span> here</h2>
                <p>Discover the power of the written word and the impact it can have on your life. Whether you're looking for inspiration, education, or entertainment, our bookstore has something for everyone.</p>
                <div className='space-x-4'>
                    <Link to='/books' className='text-xl text-white bg-red-600 hover:bg-red-700 px-5 pt-1 pb-2 rounded-md' > <HiShoppingCart className='inline'/> Store</Link>
                    <Link to='/about' className='text-xl font-semibold text-red-600 hover:text-red-800'>Learn More</Link>
                </div>
            </div>
            <div >
                <Lottie animationData={render}  className='md:h-[34rem] h-[20rem]' />
            </div>
        </div>
    );
};

export default Home;