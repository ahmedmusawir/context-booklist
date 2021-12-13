import React, { useState, useContext } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import BookListView from '../components/BookListView';
import BookAddForm from '../components/BookAddForm';
import { BookContext } from '../contexts/BookContext';

function BookListPage() {
  const [showForm, setShowForm] = useState(false);
  const { bookList, dispatch } = useContext(BookContext);

  const handleChange = (e) => {
    dispatch({
      type: 'HANDLE_CHANGE',
      payload: {
        id: e.target.id,
        name: e.target.name,
        value: e.target.value,
      },
    });
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
          {showForm && <BookAddForm data={bookList} />}
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
