import React, { Component } from 'react';
import DonorsTable from './DonorsTable';

const styles = {
    cardContainer: {
      width: '350px',
      height: '60%',
      backgroundColor: 'white',
      border: '1px solid #ccc',
    },
    header: {
      color: '#002148'
    },
    table: {
      padding: '15px'
    },
    tableHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      fontWeight: 600
    },
    tableRow: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: '#effeff',
      padding: '2px'
    },
    year: {
      marginLeft: '40px'
    },
    caption: {
      color: '#b0c4de',
      fontWeight: 600
    }
  }

class BackCard extends Component {
    render() {
      const {handleClick} = this.props;
      return (
        <div className="App">
          <div style={styles.cardContainer} onClick={ () => handleClick()}>
            <h2 style={styles.header}>Top 10 Donors</h2>
            <small style={styles.caption}>Oxford Giving Day 2018</small>

            <div style={styles.table}>
              <div style={styles.tableHeader}>
                <small>Name</small>
                <small style={styles.year}>Class Year</small>
                <small>Amount</small>
              </div>

              <DonorsTable />
            </div>

            <h1 style={styles.header}>$19,096</h1>
            <div>Back to front</div>
          </div>
        </div>
      );
    }
  }

  export default BackCard;