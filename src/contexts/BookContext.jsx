import React, { createContext, useState, useEffect } from 'react';
import { books } from '../data';

export const BookContext = createContext();

function BookContextProvider(props) {
  const localData = localStorage.getItem('books');
  const initialState = localData ? JSON.parse(localData) : books;
  const [bookList, setBookList] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(bookList));
  }, [bookList]);

  const handleChange = (e) => {
    const dataType = e.target.name;

    if (dataType === 'title') {
      setBookList(
        bookList.map((book) => {
          return book.id === e.target.id
            ? { ...book, [e.target.name]: e.target.value }
            : book;
        })
      );
    }
    if (dataType === 'author') {
      setBookList(
        bookList.map((book) => {
          return book.id === e.target.id
            ? { ...book, [e.target.name]: e.target.value }
            : book;
        })
      );
    }
    if (dataType === 'description') {
      setBookList(
        bookList.map((book) => {
          return book.id === e.target.id
            ? { ...book, [e.target.name]: e.target.value }
            : book;
        })
      );
    }
  };

  const removeBook = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{ bookList, setBookList, handleChange, removeBook }}
    >
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
