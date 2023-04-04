import React, { useState } from 'react';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {

    const [fold, setFold] = useState(false)

    const data = useLoaderData();
    console.log(data)

    const { image, title, subtitle, desc, language, pages, publisher, year, price, rating, url } = data


    return (
        <div className='w-full justify-center md:p-10 p-5'>
            <div className='mx-auto relative md:w-10/12 grid md:grid-cols-2 grid-cols-1 shadow-2xl p-5'>
                <div>
                    <img src={image} className='w-[30rem]' alt="" />
                </div>
                <div className='my-10 space-y-4 pe-5'>
                    <div>
                        <h1 className='text-3xl font-bold'>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className='h-auto'>
                        <h2 className='text-3xl font-semibold'>Details:</h2>
                        <div className='text-lg ps-1 space-y-1'>
                            <p>Language: {language} </p>
                            <p>Pages: {pages} </p>
                            <p>Publisher: {publisher} </p>
                            <p>Release: {year} </p>
                            {
                                fold ?
                                    <p> {desc}.....<span className='text-blue-600 cursor-pointer' onClick={() => setFold(!fold)} >Read less</span> </p>
                                    :
                                    <p> {desc.substring(0, 100)}.....<span className='text-blue-600 cursor-pointer' onClick={() => setFold(!fold)} >Read more</span> </p>
                            }
                            <p className='flex items-center gap-1'>Ratings: <span className='inline-flex text-yellow-500 text-xl'>{<ShowStar ratings={rating} />}</span> </p>

                            <p className='flex gap-1'>
                                Price: <span className='text-4xl'>{price}</span>
                            </p>
                        </div>
                    </div>

                    <div className='pt-5'>
                            <Link to={url} className='bg-red-600 text-xl text-white px-3 pb-2 pt-1 rounded-md' >Buy Now</Link>
                    </div>
                </div>
                <div className='absolute top-5 left-5 text-red-500 flex items-center'>
                    <AiFillHeart /> <Link to='/books'>Go Back</Link>
                </div>
            </div>
        </div>
    );
};

const ShowStar = ({ ratings }) => {

    const star = [];

    let i = 1;
    while (i <= ratings) {
        star.push(<AiFillStar />)
        i++;
    }
    // console.log(i)
    return star;
}


export default BookDetails;