import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

function BookListView({
  id,
  title,
  author,
  description,
  onDelete,
  onChange,
  onSingle,
  onBlur,
}) {
  return (
    <main className='single-item'>
      <FaTrashAlt
        color='red'
        className='float-right delete-icon'
        onClick={() => onDelete(id)}
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
