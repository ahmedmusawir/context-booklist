import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { BookContext } from '../contexts/BookContext';
import { BookReducer } from '../reducers/BookReducer';

function BookListView({
  id,
  title,
  author,
  description,
  onChange,
  onSingle,
  onBlur,
}) {
  // const { removeBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  return (
    <main className='single-item'>
      <FaTrashAlt
        color='red'
        className='float-right delete-icon'
        onClick={() => dispatch({ type: 'REMOVE_BOOK', id })}
      />
      <input
        id={id}
        type='text'
        name='title'
        value={title}
        className='form-control normal-view'
        onChange={onChange}
        onClick={onSingle}
        onBlur={onBlur}
        readOnly={true}
      />
      <input
        id={id}
        type='text'
        name='author'
        value={author}
        className='form-control normal-view'
        onChange={onChange}
        onClick={onSingle}
        onBlur={onBlur}
        readOnly={true}
      />
      <textarea
        id={id}
        type='text'
        name='description'
        value={description}
        className='form-control normal-view'
        rows={3}
        onChange={onChange}
        onClick={onSingle}
        onBlur={onBlur}
        readOnly={true}
      />
    </main>
  );
}

BookListView.propTypes = {};

export default BookListView;
