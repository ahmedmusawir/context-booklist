import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Content from './Content';

function PageHeader({ title, subTitle, cssClassNames }) {
  return (
    <Row className='justify-content-center'>
      <Col sm={12}>
        <Content width='w-100' cssClassNames={cssClassNames}>
          <h3>{title}</h3>
          <h6>{subTitle}</h6>
        </Content>
      </Col>
    </Row>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  cssClassNames: PropTypes.string,
};

export default PageHeader;
