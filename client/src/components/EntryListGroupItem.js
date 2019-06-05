import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import FormatDate from './FormatDate';

function EntryListGroupItem(props) {

  const formattedDate = <FormatDate>{props.create}</FormatDate>

  return (
    <div>
      <ListGroup.Item>
        <h5>{formattedDate}</h5>
        <Button as={Link} to={`/update/${props.id}`} variant='warning'>
          Edit Entry
        </Button>
        <Button variant='danger' onClick={() => props.handleDelete(props.id)}>
          Delete Entry
        </Button>
      </ListGroup.Item>
    </div>
  )
};

export default EntryListGroupItem;
