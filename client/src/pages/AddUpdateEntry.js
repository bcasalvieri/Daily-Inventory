import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getEntryById, createEntry, updateEntry } from '../utils/API';
import { Container, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import questionsJSON from '../questionsJSON';

const Wrapper = styled(Container)`
  position: relative;
  top: 56px;
  padding: 25px 0;
`;

class AddUpdateEntry extends Component {

  state = {
    id: '',
    resentful: false,
    resentfulNote: '',
    selfish: false,
    selfishNote: '',
    dishonest: false,
    dishonestNote: '',
    afraid: false,
    afraidNote: '',
    patient: false,
    patientNote: '',
    apology: false,
    apologyNote: '',
    prayer: false,
    prayerNote: '',
    sobriety: false,
    sobrietyNote: '',
    entrySaved: false,
  }

  componentDidMount() {
    // if an id was passed in url get entry info back
    if (this.props.match.params.id) {
      // extract entryId from url param
      const entryId = this.props.match.params.id

      getEntryById(entryId)
        .then(({ data: entryData }) => {
          this.setState({
            id: entryData._id,
            resentful: entryData.resentful,
            resentfulNote: entryData.resentfulNote,
            selfish: entryData.selfish,
            selfishNote: entryData.selfishNote,
            dishonest: entryData.dishonest,
            dishonestNote: entryData.dishonestNote,
            afraid: entryData.afraid,
            afraidNote: entryData.afraidNote,
            patient: entryData.patient,
            patientNote: entryData.patientNote,
            apology: entryData.apology,
            apologyNote: entryData.apologyNote,
            prayer: entryData.prayer,
            prayerNote: entryData.prayerNote,
            sobriety: entryData.sobriety,
            sobrietyNote: entryData.sobrietyNote
          })
        })
        .catch(err => console.log(err));
    };
  };

  handleCreateEntry = (entryInfo) => {
    createEntry(entryInfo)
      .then(() => {
        alert(`Entry saved successfully!`);
        this.setState({
          entrySaved: true
        });
      })
      .catch(err => console.log(err));
  };

  handleUpdateEntry = (entryId, entryInfo) => {
    updateEntry(entryId, entryInfo)
      .then(() => {
        alert(`Entry updated successfully!`);
        this.setState({
          entrySaved: true
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleRadioInputChange = (event) => {
    let { name, value } = event.target;

    if (value === "true") {
      value = true;
    } else {
      value = false;
    }

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    // if entry id is present (updating an entry), run update method
    // else run the create method
    if (this.state.id) {
       this.handleUpdateEntry(this.state.id, {
        resentful: this.state.resentful,
        resentfulNote: this.state.resentfulNote,
        selfish: this.state.selfish,
        selfishNote: this.state.selfishNote,
        dishonest: this.state.dishonest,
        dishonestNote: this.state.dishonestNote,
        afraid: this.state.afraid,
        afraidNote: this.state.afraidNote,
        patient: this.state.patient,
        patientNote: this.state.patientNote,
        apology: this.state.apology,
        apologyNote: this.state.apologyNote,
        prayer: this.state.prayer,
        prayerNote: this.state.prayerNote,
        sobriety: this.state.sobriety,
        sobrietyNote: this.state.sobrietyNote
      });
    } else {
       this.handleCreateEntry({
        resentful: this.state.resentful,
        resentfulNote: this.state.resentfulNote,
        selfish: this.state.selfish,
        selfishNote: this.state.selfishNote,
        dishonest: this.state.dishonest,
        dishonestNote: this.state.dishonestNote,
        afraid: this.state.afraid,
        afraidNote: this.state.afraidNote,
        patient: this.state.patient,
        patientNote: this.state.patientNote,
        apology: this.state.apology,
        apologyNote: this.state.apologyNote,
        prayer: this.state.prayer,
        prayerNote: this.state.prayerNote,
        sobriety: this.state.sobriety,
        sobrietyNote: this.state.sobrietyNote
      });
    };

  };

  render() {
    // if entry has been saved, redirect to /home
    if (this.state.entrySaved) {
      return <Redirect to='/home' />
    }

    return (
      <React.Fragment>
        <Wrapper className='d-flex justify-content-center'>
          <Col md={8} lg={6}>
            <h2 className='text-center mb-4'>{(this.state.id) ? "Update your inventory!" : "Add new inventory!"}</h2>
            <Form onSubmit={this.handleFormSubmit}>
              {
                questionsJSON.map(question => {
                  return (
                    <React.Fragment>
                      <Form.Group className='m-0 mb-5'>
                        <Form.Label className='mr-3'>{question.question}</Form.Label>
                        <Form.Check
                          type='checkbox'
                          id=''
                          label='Yes'
                          value='true'
                          name={question.name}
                          onChange={this.handleRadioInputChange}
                          checked={this.state[question.name]}
                          inline
                        />
                        <Form.Check
                          type='checkbox'
                          id=''
                          label='No'
                          value='false'
                          name={question.name}
                          onChange={this.handleRadioInputChange}
                          checked={!this.state[question.name] || this.state[question.name] === ''}
                          inline
                        />
                        <Form.Control
                          as='textarea'
                          rows='2'
                          onChange={this.handleInputChange}
                          name={question.note}
                          value={this.state[question.note]}
                          placeholder='Optional Notes'
                          style={{borderRadius: '50px'}}
                          className='px-4'
                        />
                      </Form.Group>
                    </React.Fragment>
                  )
                })
              }
              <Button type='submit' variant='success'>
                {
                  (this.state.id)
                    ? 'Update Inventory'
                    : 'Save Inventory'
                }
              </Button>
            </Form>
          </Col>
        </Wrapper>
      </React.Fragment>
    )
  }
}



export default AddUpdateEntry;
