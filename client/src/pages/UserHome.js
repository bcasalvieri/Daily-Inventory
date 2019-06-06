import React from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import EntriesListGroup from '../components/EntriesListGroup';
import EntriesCard from '../components/EntriesCard';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  position: relative;
  top: 56px;
  padding: 25px 0;
`;

function UserHome() {

  return (
    <React.Fragment>
      <Wrapper>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <h2 className='text-center'>All Saved Inventories</h2>
            <EntriesListGroup />
          </Col>
        </Row>
      </Wrapper>
    </React.Fragment>
  )
}



export default UserHome; 
