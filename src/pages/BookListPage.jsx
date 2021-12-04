import React, { useState } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { books } from '../data';

function BookListPage() {
  const initialState = books;
  const [bookList, setBookList] = useState(initialState);
  const [isEdit, setIsEdit] = useState(true);

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const dataType = e.target.name;

    if (dataType === 'title') {
      setBookList(
        bookList.map((book) => {
          // console.log('Book ID: ', typeof book.id);
          // console.log('E.target ID: ', typeof e.target.id);
          return book.id === Number(e.target.id)
            ? { ...book, [e.target.name]: e.target.value }
            : book;
        })
      );
    }
    if (dataType === 'author') {
      setBookList(
        bookList.map((book) => {
          return book.id === Number(e.target.id)
            ? { ...book, [e.target.name]: e.target.value }
            : book;
        })
      );
    }
    if (dataType === 'description') {
      setBookList(
        bookList.map((book) => {
          return book.id === Number(e.target.id)
            ? { ...book, [e.target.name]: e.target.value }
            : book;
        })
      );
    }
    // console.log(bookList);
    // console.log(e.target.id);
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setIsEdit((prev) => (prev = !prev));
  //     console.log('clicked', e.target.id);
  //     e.target.disabled = false;
  //   };

  const handleSingle = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const dataType = e.target.name;

    if (dataType === 'title') {
      bookList.map((book) => {
        return book.id === Number(e.target.id)
          ? (e.target.readOnly = false)
          : null;
      });
    }
    if (dataType === 'author') {
      bookList.map((book) => {
        return book.id === Number(e.target.id)
          ? (e.target.readOnly = false)
          : null;
      });
    }
    if (dataType === 'description') {
      bookList.map((book) => {
        return book.id === Number(e.target.id)
          ? (e.target.readOnly = false)
          : null;
      });
    }
  };

  const handleBlur = (e) => {
    e.preventDefault();
    // console.log(e.target);
    bookList.map((book) => {
      return book.id === Number(e.target.id)
        ? (e.target.readOnly = true)
        : null;
    });
  };

  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light mt-3'>
            {bookList.map((book) => (
              <main key={book.id} className='single-item'>
                {/* <form onSubmit={handleSubmit} id={book.id}> */}
                {/* <fieldset disabled={isEdit}> */}
                <input
                  id={book.id}
                  type='text'
                  name='title'
                  value={book.title}
                  className={
                    isEdit ? 'form-control normal-view' : 'form-control'
                  }
                  onChange={handleChange}
                  onClick={handleSingle}
                  onBlur={handleBlur}
                  readOnly={true}
                />
                <div
                  className={
                    isEdit
                      ? 'alert alert-primary d-none'
                      : 'alert alert-primary d-none'
                  }
                >
                  {book.title}
                </div>

                <input
                  id={book.id}
                  type='text'
                  name='author'
                  value={book.author}
                  className='form-control normal-view'
                  onChange={handleChange}
                  onClick={handleSingle}
                  onBlur={handleBlur}
                  readOnly={true}
                />
                <div className='alert alert-primary d-none'>{book.author}</div>
                <textarea
                  id={book.id}
                  type='text'
                  name='description'
                  value={book.description}
                  className='form-control normal-view'
                  rows={3}
                  onChange={handleChange}
                  onClick={handleSingle}
                  onBlur={handleBlur}
                  readOnly={true}
                />
                <div className='alert alert-primary d-none'>
                  {book.description}
                </div>
                {/* </fieldset> */}
                {/* <button type='submit' className='btn btn-info'>
                  Edit
                </button> */}
                {/* </form> */}
              </main>
            ))}
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default BookListPage;
