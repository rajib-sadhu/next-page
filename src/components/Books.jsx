import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {

    const data = useLoaderData();
    // console.log(data.books)
    const {books} = data;

    return (
        <div className='grid md:grid-cols-4 grid-cols-1 gap-10 px-10 my-10'>
            {
                books.map(book=><Book key={book.isbn13} book={book} />)
            }
        </div>
    );
};

export default Books;