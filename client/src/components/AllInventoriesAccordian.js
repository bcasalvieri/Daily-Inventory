import React, { useContext } from 'react'
import { Accordion, Card } from 'react-bootstrap';
import UserContext from '../utils/UserContext';
import moment from 'moment';

function AllInventoriesAccordian() {

  const userContext = useContext(UserContext)

  return (
    <Accordion>
      {
        (userContext.entries.length > 0)
          ? (userContext.entries.map((entry) => {
            return (
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={userContext.entries.indexOf(entry)}
                  className='accordian-header font-weight-bold px-5'
                  >
                  {moment(entry.created).format('MMMM Do, YYYY')}
                </Accordion.Toggle>
                <Accordion.Collapse
                  eventKey={userContext.entries.indexOf(entry)}
                >
                  <Card.Body>
                    <div className='mx-5'>
                    <p className='mb-0'><strong>Was I resentful?</strong> { (entry.resentful) ? "Yes" : "No" }</p>
                    <p>Notes: {entry.resentfulNote}</p>
                    <p className='mb-0'><strong>Was I selfish?</strong> { (entry.selfish) ? "Yes" : "No" }</p>
                    <p>Notes {entry.selfishNote}</p>
                    <p className='mb-0'><strong>Was I dishonest?</strong> { (entry.dishonest) ? "Yes" : "No" }</p>
                    <p>Notes: {entry.dishonestNote}</p>
                    <p className='mb-0'><strong>Did I say or do something out of fear?</strong> { (entry.afraid) ? "Yes" : "No" }</p>
                    <p>Notes: {entry.afraidNote}</p>
                    <p className='mb-0'><strong>Was I kind and loving towards all?</strong> { (entry.loving) ? "Yes" : "No" }</p>
                    <p>Notes: {entry.lovingNote}</p>
                    <p className='mb-0'><strong>Was I patient with all?</strong> { (entry.patient) ? "Yes" : "No" }</p>
                    <p>Notes: {entry.patientNote}</p>
                    <p className='mb-0'><strong>Do I owe someone an apology?</strong> { (entry.apology) ? "Yes" : "No" }</p>
                    <p>Notes: {entry.apologyNote}</p>
                    <p className='mb-0'><strong>Have I kept something to myself that I need to discuss with someone?</strong> { (entry.discuss) ? "Yes" : "No" }</p>
                    <p>Notes: {entry.discussNote}</p>
                    <p className='mb-0'><strong>Did I take time to connect with God in prayer and meditation?</strong> { (entry.prayer) ? "Yes" : "No" }</p>
                    <p>Notes: {entry.prayerNote}</p>
                    <p className='mb-0'><strong>Did I remain sober?</strong> { (entry.sobriety) ? "Yes" : "No" }</p>
                    <p>Notes: {entry.sobrietyNote}</p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )
          }))
          : <div style={{width: '100%'}} className='d-flex justify-content-center'>
            <h4>No inventories to display!</h4>
          </div>
      }
    </Accordion>
  )
}

export default AllInventoriesAccordian;
