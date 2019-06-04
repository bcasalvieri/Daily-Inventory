import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EntriesListGroup from '../components/EntriesListGroup';
import Sidebar from '../components/Sidebar';
// import Main from '../components/Main';
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
            <h2>All Saved Entries</h2>
            <EntriesListGroup />
          </Col>
        </Row>
      </Wrapper>
    </React.Fragment>
  )
}

export default UserHome; 
