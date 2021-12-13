import React, { createContext, useReducer, useEffect } from 'react';
import { books } from '../data';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {
  const localData = localStorage.getItem('books');
  const initialState = localData ? JSON.parse(localData) : books;
  const [bookList, dispatch] = useReducer(BookReducer, initialState);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(bookList));
  }, [bookList]);

  return (
    <BookContext.Provider value={{ bookList, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
