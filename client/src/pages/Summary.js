import React, { useContext } from 'react'
import AllInventoriesAccordian from '../components/AllInventoriesAccordian';
import '../assets/css/style.css';
import UserContext from '../utils/UserContext';

function Summary() {
  
  const userContext = useContext(UserContext);

  return (
    <React.Fragment>
      <div className='wrapper pt-5'>
        <div className='container'>
          <h2 className='summary-header text-center mb-4'>All {userContext.firstName}'s Inventories</h2>
          <AllInventoriesAccordian />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Summary;
