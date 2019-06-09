import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getEntryById, createEntry, updateEntry } from '../utils/API';
import { Col, Form, Button } from 'react-bootstrap';
import questionsJSON from '../questionsJSON';
import Wrapper from '../components/Wrapper';
import '../assets/css/style.css';

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
    loving: false,
    lovingNote: '',
    patient: false,
    patientNote: '',
    apology: false,
    apologyNote: '',
    discuss: false,
    discussNote: '',
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
            loving: entryData.loving,
            lovingNote: entryData.lovingNote,
            patient: entryData.patient,
            patientNote: entryData.patientNote,
            apology: entryData.apology,
            apologyNote: entryData.apologyNote,
            discuss: entryData.discuss,
            discussNote: entryData.discussNote,
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
        loving: this.state.loving,
        lovingNote: this.state.lovingNote,
        patient: this.state.patient,
        patientNote: this.state.patientNote,
        apology: this.state.apology,
        apologyNote: this.state.apologyNote,
        discuss: this.state.discuss,
        discussNote: this.state.discussNote,
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
        loving: this.state.loving,
        lovingNote: this.state.lovingNote,
        patient: this.state.patient,
        patientNote: this.state.patientNote,
        apology: this.state.apology,
        apologyNote: this.state.apologyNote,
        discuss: this.state.discuss,
        discussNote: this.state.discussNote,
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
        <Wrapper className='pt-5'>
          <Col md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
            <h2 className='text-center mb-4' style={{color: '#028e81'}}>{(this.state.id) ? "Update your inventory!" : "Add a new inventory!"}</h2>
            <Form onSubmit={this.handleFormSubmit}>
              {
                questionsJSON.map(question => {
                  return (
                    <React.Fragment>
                      <Form.Group className='m-0 mb-5'>
                        <Form.Label className='form-label mr-3'>{question.question}</Form.Label>
                        <div className='mb-3'>
                          <Form.Check
                            type='checkbox'
                            key={`${question.id}-yes`}
                            label='Yes'
                            value='true'
                            name={question.name}
                            onChange={this.handleRadioInputChange}
                            checked={this.state[question.name]}
                            inline
                            />
                          <Form.Check
                            type='checkbox'
                            key={`${question.id}-no`}
                            label='No'
                            value='false'
                            name={question.name}
                            onChange={this.handleRadioInputChange}
                            checked={!this.state[question.name] || this.state[question.name] === ''}
                            inline
                          />
                        </div>
                        <Form.Control
                          as='textarea'
                          rows='2'
                          onChange={this.handleInputChange}
                          name={question.note}
                          value={this.state[question.note]}
                          placeholder='Optional Notes'
                          style={{borderRadius: '50px'}}
                          className='px-4 text-box'
                        />
                      </Form.Group>
                    </React.Fragment>
                  )
                })
              }
              <Button type='submit' className='form-button btn-block'>
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
