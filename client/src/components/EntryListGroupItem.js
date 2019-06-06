import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import moment from 'moment';

function EntryListGroupItem(props) {

  return (
    <div>
      <ListGroup.Item>
        <h5>{moment(props.create).format("MMMM DD YYYY [at] hh:mm:ss a")}</h5>
        <Button as={Link} to={`/update/${props.id}`} variant='warning'>
          <i className='fas fa-edit'></i>
        </Button>
        <Button variant='danger' onClick={() => props.handleDelete(props.id)}>
          <i className='fas fa-trash-alt'></i>
        </Button>
      </ListGroup.Item>
    </div>
  )
};

export default EntryListGroupItem;
