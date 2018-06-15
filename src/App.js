import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heroImage from './a.jpg';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const styles = {
  cardContainer: {
    width: '350px',
    height: '60%',
    backgroundColor: 'white',
    border: '1px solid gray'
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
    width: '50%',
    backgroundColor: '#002148'
  },
  aboveProgressBar: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px'
  },
  donationAmount: {
    fontWeight: 600
  }
}

class App extends Component {

  state = {
    visible: true
  }

  flipView = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible})
  }

  render() {
    const { visible } = this.state;
    return (
      <div className="App">
      { visible ?
        <FrontCard handleClick={this.flipView} /> :
        <BackCard handleClick={this.flipView} />
      }
      </div>
    );
  }
}

export default App;
