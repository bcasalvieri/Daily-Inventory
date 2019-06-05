import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';
import EntryListGroupItem from './EntryListGroupItem';
import { ListGroup } from 'react-bootstrap';

function EntriesListGroup() {
  
  const userContext = useContext(UserContext);

  return (
    <div>
      <ListGroup variant='flush'>
        {
          (userContext.entries.length > 0)
            ? (userContext.entries.map((entry) => {
              return (
                <EntryListGroupItem
                  key={entry._id}
                  id={entry._id}
                  create={entry.created}
                  handleDelete={userContext.handleDeleteNote}
                />
              )
            }))
            : <h4>No entries to display!</h4>
        }
      </ListGroup>
    </div>
  )
}

export default EntriesListGroup;
