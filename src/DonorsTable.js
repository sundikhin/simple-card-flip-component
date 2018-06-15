import React from 'react';
import donors from './donors';
import stylesheets from './App.css';

const styles = {
  tableRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#effeff',
    padding: '5px'
  }
}

const DonorsTable = () => {
  return (
    donors.map(donor =>
      <div className="tableRow">
        <small>{donor.name}</small>
        <small>{donor.year}</small>
        <small>{donor.amount}</small>
      </div>
    )
  );
};

export default DonorsTable;