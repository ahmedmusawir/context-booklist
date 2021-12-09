import React, { useState, useEffect } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { books } from '../data';
import BookListView from '../components/BookListView';
import BookAddForm from '../components/BookAddForm';

function BookListPage() {
  const localData = localStorage.getItem('books');
  const initialState = localData ? JSON.parse(localData) : books;
  const [bookList, setBookList] = useState(initialState);
  const [showForm, setShowForm] = useState(false);

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

  const handleSingle = (e) => {
    e.preventDefault();
    const dataType = e.target.name;

    if (dataType === 'title') {
      bookList.map((book) => {
        return book.id === e.target.id ? (e.target.readOnly = false) : null;
      });
    }
    if (dataType === 'author') {
      bookList.map((book) => {
        return book.id === e.target.id ? (e.target.readOnly = false) : null;
      });
    }
    if (dataType === 'description') {
      bookList.map((book) => {
        return book.id === e.target.id ? (e.target.readOnly = false) : null;
      });
    }
  };

  const handleBlur = (e) => {
    e.preventDefault();

    bookList.map((book) => {
      return book.id === e.target.id ? (e.target.readOnly = true) : null;
    });
  };

  const handleDelete = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };

  const handleAdd = () => {
    setShowForm((prev) => (prev = !prev));
  };

  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <button
            type='button'
            className='btn btn-success btn-block my-2'
            onClick={handleAdd}
          >
            Add New
          </button>
          <hr className='bg-primary' />
          {showForm && <BookAddForm data={bookList} addBook={setBookList} />}
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light mt-3'>
            {bookList.length > 0 ? (
              bookList.map((book) => (
                <BookListView
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onSingle={handleSingle}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <div className='text-danger display-5'>No Books to show...</div>
            )}
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default BookListPage;
