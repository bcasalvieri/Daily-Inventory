import React, { Component } from 'react';
import { getEntryById } from '../utils/API';

class AddUpdateEntry extends Component {

  state = {
    id: '',
    resentful: '',
    resentfulNote: '',
    selfish: '',
    selfishNote: '',
    dishonest: '',
    dishonestNote: '',
    afraid: '',
    afraidNote: '',
    patient: '',
    patientNote: '',
    apology: '',
    apologyNote: '',
    prayer: '',
    prayerNote: '',
    sobriety: '',
    sobrietyNote: '',
    entrySaved: false,
  }

  componentDidMount() {
    // if an id was passed in url get entry info back
    if (this.match.params.id) {
      // extract entryId from url param
     const entryId = this.match.params.id

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
          sobrietyNote: entryData.sobrietyNote,
        })
      })
      .catch(err => console.log(err));
   };
  };

  handleCreateEntry = (entryInfo) => {
    
  }



  render() {
    return (
      <div>
        <h1>Update Page</h1>
      </div>
    )
  }
}

export default AddUpdateEntry;
