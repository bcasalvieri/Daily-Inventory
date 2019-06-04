import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';
import EntryListGroupItem from './EntryListGroupItem';


function EntriesListGroup() {
  
  const userContext = useContext(UserContext);

  return (
    <div>
      {
        (userContext.entries.length > 0)
          ? (userContext.entries.map((entry) => {
            return (
              <EntryListGroupItem
                key={entry._id}
                id={entry._id}
                create={entry.created}
              />
            )
          }))
          : <h4>No entries to display!</h4>
      }
    </div>
  )
}

export default EntriesListGroup;
