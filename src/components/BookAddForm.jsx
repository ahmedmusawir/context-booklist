import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import FormikControl from '../components/formik/FormikControl';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import '../pages/FormikComp.scss';

function BookAddForm({ data, addBook }) {
  //   FORMIK INFO
  const initialValues = {
    title: '',
    author: '',
    description: '',
  };
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    // resetForm({ values: initialValues });
    const bookObj = { id: uuidv4(), ...values };
    addBook([...data, bookObj]);
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is Required!'),
    author: Yup.string().required('Author is Required!'),
    description: Yup.string().required('Description is Required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className='p-3 bg-light formik-comp'>
          {/* BOOK TITLE */}
          <div className='mb-2'>
            <FormikControl
              control='input'
              type='text'
              name='title'
              label='Book Title'
              placeholder='Title of the Book'
              className={
                formik.touched.title && formik.errors.title
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
          </div>
          {/* BOOK AUTHOR */}
          <div className='mb-2'>
            <FormikControl
              control='input'
              type='text'
              name='author'
              label='Book Author'
              placeholder='Author of the Book'
              className={
                formik.touched.author && formik.errors.author
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
          </div>
          {/* TEXT AREA */}
          <div className='mb-3'>
            <FormikControl
              control='textarea'
              name='description'
              label='Description'
              placeholder='Book Description'
              rows={4}
              className={
                formik.touched.description && formik.errors.description
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
          </div>
          <hr className='bg-primary' />
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
          <button className='btn btn-warning ml-1' type='reset'>
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
}

BookAddForm.propTypes = {};

export default BookAddForm;
