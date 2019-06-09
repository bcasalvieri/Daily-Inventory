import React, { useContext } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import EntriesFlipCard from '../components/EntriesFlipCard';
import Sidebar from '../components/Sidebar';
import '../assets/css/style.css';
import UserContext from '../utils/UserContext';

export default function UserHome() {

  const userContext = useContext(UserContext);

  return (
    <React.Fragment>
      <div className='wrapper'>
        <Jumbotron fluid className='user-jumbotron mb-0'>
          <Container style={{height: '35vh'}} className='d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column align-items-center'>
              <h3 className='mb-5' style={{color: 'whitesmoke'}}>Step Ten</h3>
              <h1 className='text-center' style={{color: 'whitesmoke'}}>Continued to take personal inventory and when we were wrong promptly admitted it.</h1>
            </div>
          </Container>
        </Jumbotron>
        <Container className='py-5'>
          <Row>
            <Col md={4} lg={3}>
              <Sidebar />
            </Col>
            <Col md={8} lg={9}>
              <h2 className='text-center mb-4' style={{color: '#028e81'}}> {userContext.firstName}'s Saved Inventories</h2>
                <EntriesFlipCard />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
