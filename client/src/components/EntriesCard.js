import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import moment from 'moment';
import { Card, Button } from 'react-bootstrap';

function EntriesCard() {

  const userContext = useContext(UserContext)

  useEffect(() => {
    userContext.getEntries();
  }, [userContext]);

  return (
    <div>
      {
        (userContext.entries.length > 0)
          ? (userContext.entries.map((entry) => {
            return(
              <Card>
                <Card.Body>
                  <Card.Title>{moment(entry.created).format('MMMM DD YYYY [at] hh:mm:ss a')}</Card.Title>
                  <Button
                  as={Link}
                  to={`/update/${entry.id}`}
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                  <Button
                    onClick={() => userContext.handleDeleteEntry(entry.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </Button>
                </Card.Body>
              </Card>
            )
          }))
          : <h4>No inventories to display!</h4>
      }
    </div>
  )
}

export default EntriesCard;
