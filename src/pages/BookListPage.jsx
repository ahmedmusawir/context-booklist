import React, { useState } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { books } from '../data';

function BookListPage() {
  const initialState = books;
  const [bookList, setBookList] = useState(initialState);
  const [isEdit, setIsEdit] = useState(true);
  const [isSave, setIsSave] = useState(false);

  const handleChange = (e) => {
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
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit((prev) => (prev = !prev));
    setIsSave((prev) => (prev = !prev));
  };
  const handleSave = (e) => {
    e.preventDefault();
    setIsEdit((prev) => (prev = !prev));
    setIsSave((prev) => (prev = !prev));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    console.log('Add form should show up now!');
  };

  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light mt-3'>
            <Row>
              <Col sm={4}>
                <button
                  type='button'
                  className='btn btn-info btn-block'
                  onClick={handleEdit}
                  disabled={isSave}
                >
                  Edit
                </button>
              </Col>
              <Col sm={4}>
                <button
                  type='button'
                  className='btn btn-secondary btn-block mb-2'
                  onClick={handleSave}
                  disabled={isEdit}
                >
                  Save
                </button>
              </Col>
              <Col sm={4}>
                <button
                  type='button'
                  className='btn btn-success btn-block mb-2'
                  onClick={handleAdd}
                >
                  Add New
                </button>
              </Col>
            </Row>
            {bookList.map((book) => (
              <main key={book.id} className='single-item'>
                <form>
                  <fieldset disabled={isEdit}>
                    <label htmlFor='title'>
                      <small className='font-weight-bold p-2 text-info'>
                        Book Title
                      </small>
                    </label>
                    <input
                      id={book.id}
                      type='text'
                      name='title'
                      value={book.title}
                      className={
                        isEdit ? 'form-control normal-view' : 'form-control'
                      }
                      onChange={handleChange}
                      //   onClick={handleSingle}
                      //   onBlur={handleBlur}
                      //   readOnly={true}
                    />
                    <div
                      className={isEdit ? 'd-none' : 'alert alert-secondary'}
                    >
                      {book.title}
                    </div>
                    <label htmlFor='author'>
                      <small className='font-weight-bold p-2 text-info'>
                        Author:
                      </small>
                    </label>
                    <input
                      id={book.id}
                      type='text'
                      name='author'
                      value={book.author}
                      className={
                        isEdit ? 'form-control normal-view' : 'form-control'
                      }
                      onChange={handleChange}
                      //   onClick={handleSingle}
                      //   onBlur={handleBlur}
                      //   readOnly={true}
                    />
                    <div
                      className={isEdit ? 'd-none' : 'alert alert-secondary'}
                    >
                      {book.author}
                    </div>
                    <label htmlFor='description'>
                      <small className='font-weight-bold p-2 text-info'>
                        Description
                      </small>
                    </label>
                    <textarea
                      id={book.id}
                      type='text'
                      name='description'
                      value={book.description}
                      className={
                        isEdit ? 'form-control normal-view' : 'form-control'
                      }
                      rows={3}
                      onChange={handleChange}
                      //   onClick={handleSingle}
                      //   onBlur={handleBlur}
                      //   readOnly={true}
                    />
                    <div
                      className={isEdit ? 'd-none' : 'alert alert-secondary'}
                    >
                      {book.description}
                    </div>
                  </fieldset>
                </form>
              </main>
            ))}
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default BookListPage;
