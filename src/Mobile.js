import { useState } from 'react';
// import image from './pokemonFightBackground.webp'
import deviceCover from './assets/pokedexCover.png'

const Display = () => {
  // styles
  const bioContainer = {
    display: 'flex',
    backgroundColor: 'cyan',
    width: 300,
    justifyContent: 'flex-start'
  }
  const flexItem1 = {
    height: 100,
    width: 175,
    backgroundColor: 'yellow',
    border: '1px solid black',
    margin: 5
  }
  const flexItem2 = {
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
    border: '1px solid black',
    margin: 5
  }
  const displayTitle = {
    border: '1px solid white',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  }
  const historyColumn1 = {
    display: 'inline-block',
    backgroundColor: 'lightgreen',
    width: 100,
    height: 45,
    margin: 5,
  }
  const historyColumn2 = {
    display: 'inline-block',
    backgroundColor: 'orange',
    width: 175,
    height: 45,
    margin: 5,
  }
  // states
  const [display, setDisplay] = useState('bio')

  if (display === 'bio') {
    return (
      <div style={{backgroundColor: 'purple'}}>
        {/* Display title */}
        <div style={displayTitle}>Pokedex</div>
        {/* Display bio */}
        <div style={bioContainer}>
          <div style={flexItem1}>item 1</div>
          <div style={flexItem2}>item 2</div>
        </div>
        {/* Display project, experience etc... */}
        <div>
          <div style={historyColumn1}>col 1</div>
          <div style={historyColumn2}>col 2</div>
        </div>
        <div>
          <div style={historyColumn1}>col 1</div>
          <div style={historyColumn2}>col 2</div>
        </div>
        <div>
          <div style={historyColumn1}>col 1</div>
          <div style={historyColumn2}>col 2</div>
        </div>
        <div>
          <div style={historyColumn1}>col 1</div>
          <div style={historyColumn2}>col 2</div>
        </div>
      </div>
    )
  } else if (display === 'project 1') {
    return (
      <div style={{ backgroundColor: 'red', width: 300, height: 500 }}>
        <button onClick={() => setDisplay('bio')}>Back</button>
        <h3>Project 1</h3>
        <ul>
          <li>Description</li>
          <li>image</li>
        </ul>
      </div>
    )
  }
}
const Device = () => {
  // styles
  const topCoverStyle = {
    width: 300,
    height: 125,
  }
  const bottomCoverStyle = {
    width: 300,
    height: 125,
    transform: 'rotate(180deg)'
  }
  const containerStyle = {
    display: 'flex', // flexbox property
    alignItems: 'center', // vertically centre child div
    justifyContent: 'center', // horizontally center the child div
    height: '100vh', // Set the height to 100% of the viewport height
  }

  return (
    <div style={containerStyle}>
      <div style={{ backgroundColor: 'light green', width: 300, }}>
        <img alt='device top cover' style={topCoverStyle} src={deviceCover}></img>
        <Display />
        <img alt='device bottom cover' style={bottomCoverStyle} src={deviceCover}></img>
      </div>
    </div>
  )

  /*
  
  */
}
const Background = () => {
  return (
    <div style={{ backgroundColor: 'pink', width: '100vw', height: '100vh' }}>
      <Device />
    </div>
  )
}
export default Background;
