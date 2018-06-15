import React, { Component } from 'react';
import heroImage from './a.jpg';

const styles = {
    cardContainer: {
      width: '350px',
      height: '60%',
      backgroundColor: 'white',
      border: '1px solid #ccc'
    },
    heroImage: {
      width: '100%',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px'
    },
    progressContainer: {
      padding: '20px'
    },
    progressBarOuter: {
      width: '100%',
      border: '1px solid #ccc'
    },
    progressBarInner: {
      height: '24px',
      width: '75%',
      backgroundColor: '#002148'
    },
    aboveProgressBar: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px'
    },
    donationAmount: {
      fontWeight: 600
    },
    caption: {
      color: '#b0c4de',
      fontWeight: 600
    }
  }

class FrontCard extends Component {
    render() {
        const {handleClick} = this.props;
      return (

        <div style={styles.cardContainer} onClick={ () => handleClick() }>
        <img style={styles.heroImage} src={heroImage} alt="Team picture"/>

        <div style={styles.mainContent}>
            <h2>Oxford Giving Day</h2>
            <small style={styles.caption}>For Oxford University</small>
            <p>
                Oxford is a world-leading centre of learning, teaching and research and the
                oldest university in the English-speaking world.
            </p>
        </div>

        <div style={styles.progressContainer}>
            <div style={styles.aboveProgressBar}>
            <span>75%</span>
            <span>471 donors</span>
            </div>
            <div style={styles.progressBarOuter}>
            <div style={styles.progressBarInner}></div>
            </div>
            <div style={styles.aboveProgressBar}>
            <span>Online</span>
            <div><span style={styles.donationAmount}>$19,096</span> donated</div>
            </div>
        </div>
        </div>
      );
    }
  }

  export default FrontCard;