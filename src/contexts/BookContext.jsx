import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {
  const initialState = [];
  const [bookList, dispatch] = useReducer(BookReducer, initialState, () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : initialState;
  });

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
