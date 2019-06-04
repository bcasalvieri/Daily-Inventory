import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';

function EntryListGroupItem(props) {
  return (
    <div>
      <ListGroup.Item>
        <h5>{props.created}</h5>
        <Button variant='warning'>
          <Link to={`/update/${props.id}`}>Edit Entry</Link>
        </Button>
        <Button>
          <Link>Delete Entry</Link>
        </Button>
      </ListGroup.Item>
    </div>
  )
};

export default EntryListGroupItem;
