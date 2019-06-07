import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import EntriesCard from '../components/EntriesCard';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import '../assets/style.css';

const Wrapper = styled.div`
  // position: relative;
  // top: 62px;
`;

function UserHome() {

  return (
    <React.Fragment>
      <Wrapper className='wrapper'>
        <Jumbotron fluid className='user-jumbotron'>
          <Container style={{height: '30vh'}} className='d-flex justify-content-center align-items-end'>
            <div className='d-flex flex-column align-items-center'>
              <h3 className='mb-5' style={{color: 'whitesmoke'}}>Principle 7</h3>
              <h2 className='text-center' style={{color: 'whitesmoke'}}>Reserve a daily time with God for self-examination, Bible reading, and prayer in order to know God and His will for my life and to gain the power to follow His will.</h2>
            </div>
          </Container>
        </Jumbotron>
        <Container className='mt-5'>
          <Row>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <h2 className='text-center mb-4' style={{color: '#004D80'}}>All Saved Inventories</h2>
                <EntriesCard />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </React.Fragment>
  )
}



export default UserHome; 
