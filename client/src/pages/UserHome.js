import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EntriesListGroup from '../components/EntriesListGroup';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import { getUserProfile } from '../utils/API';

const Wrapper = styled(Container)`
  position: relative;
  top: 56px;
  padding: 25px 0;
`;

class UserHome extends Component {

  

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Row>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <h2>All Saved Inventories</h2>
              <EntriesListGroup />
            </Col>
          </Row>
        </Wrapper>
      </React.Fragment>
    )
  }
}



export default UserHome; 
