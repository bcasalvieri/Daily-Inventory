import React, { useContext } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import EntriesCard from '../components/EntriesCard';
import Sidebar from '../components/Sidebar';
import '../assets/style.css';
import UserContext from '../utils/UserContext';
import Wrapper from '../components/Wrapper';

function UserHome() {

  const userContext = useContext(UserContext);

  return (
    <React.Fragment>
      <Wrapper>
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
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <h2 className='text-center mb-4' style={{color: '#028e81'}}> {userContext.firstName}'s Saved Inventories</h2>
                <EntriesCard />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </React.Fragment>
  )
}



export default UserHome; 
