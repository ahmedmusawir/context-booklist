import React, { useState, useRef } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { books } from '../data';

function BookListPage() {
  const initialState = books;
  const [bookList, setBookList] = useState(initialState);
  //   console.log(bookList);

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setBookList(
      bookList.map((book) =>
        book.id == e.target.id
          ? { ...book, [e.target.name]: e.target.value }
          : book
      )
    );
    console.log(bookList);
    console.log(e.target.id);
  };

  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light mt-3'>
            {bookList.map((book) => (
              <ul key={book.id}>
                <input
                  id={book.id}
                  type='text'
                  name='name'
                  value={book.name}
                  onChange={handleChange}
                />
                <li>{book.author}</li>
                <li>{book.description}</li>
              </ul>
            ))}
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default BookListPage;
