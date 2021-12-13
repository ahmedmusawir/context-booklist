import React from 'react';

export const BookReducer = (state, action) => {
  console.log('ACTION:', action);
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    case 'HANDLE_CHANGE':
      return state.map((book) => {
        return book.id === action.payload.id
          ? { ...book, [action.payload.name]: action.payload.value }
          : book;
      });

    default:
      return state;
  }
};
