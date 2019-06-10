import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import moment from 'moment';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import '../assets/css/style.css';

function EntriesFlipCard() {

  const userContext = useContext(UserContext)

  useEffect(() => {
    userContext.getEntries();
  }, []);

  return (
    <div>
      <CardGroup>
      {
        (userContext.entries.length > 0)
          ? (userContext.entries.map((entry) => {
            return(
              <Col xs={10} md={6} lg={4} className='mb-4'>
                <Card className='entries-card flip-card' key={userContext.entries._id}>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <Card.Body className='d-flex justify-content-center align-items-center'>
                        <Card.Title>{moment(entry.created).format('MMM Do, YYYY')}</Card.Title>
                      </Card.Body>
                    </div>
                    <div className='flip-card-back'>
                      <Card.Body className='d-flex flex-column justify-content-center'>
                        <NavLink to={`/update/${entry._id}`} className='sidebar-link mb-3'>
                          <Button
                            block
                            className='edit-button'
                          >
                            <i className='fas fa-edit mr-1'></i> Edit
                          </Button>
                        </NavLink>

                        <Button
                          block
                          variant='danger'
                          onClick={() => userContext.handleDeleteEntry(entry._id)}
                        >
                          <i className="fas fa-trash-alt mr-1"></i> Delete
                        </Button>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          }))
          : <div style={{width: '100%'}} className='d-flex justify-content-center'>
              <h4>No inventories to display!</h4>
            </div>
      }
      </CardGroup>
    </div>
  )
}

export default EntriesFlipCard;
