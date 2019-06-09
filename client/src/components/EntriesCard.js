import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import moment from 'moment';
import { Card, CardGroup, Col } from 'react-bootstrap';
import '../assets/css/style.css';

function EntriesCard() {

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
              <Col xs={8} md={4} className='mb-4'>
              <Card className='entries-card' key={userContext.entries._id}>
                <Card.Body>
                  <Card.Title className='text-center' style={{color: '#015C53'}}>{moment(entry.created).format('MMM Do, YYYY')}</Card.Title>
                  <div className='d-flex justify-content-between mt-4'>
                    <Link to={`/update/${entry._id}`}>
                      <i 
                        className="fas fa-edit"
                        style={{cursor: 'pointer', color: '#015C53', fontSize: '1.5rem'}}
                      >
                      </i>
                    </Link>
                    <i
                    style={{cursor: 'pointer', color: 'red', opacity: '0.6', fontSize: '1.5rem'}}
                    onClick={() => userContext.handleDeleteEntry(entry._id)}
                    className="fas fa-trash-alt"
                    >
                    </i>
                  </div>
                </Card.Body>
              </Card>
              </Col>
            )
          }))
          : <h4>No inventories to display!</h4>
      }
      </CardGroup>
    </div>
  )
}

export default EntriesCard;
