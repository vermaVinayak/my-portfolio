import { useState } from 'react';
import image from './pokemonFightBackground.webp'
import deviceCover from './assets/pokedexCover.png'


const Bio = ({ changeWindow }) => {
  const imgContainerStyle = {
    height: 125, // Set the height to 100% of the viewport height
    width: 125,
    marginTop: 15,
    marginBottom: 15,
  }
  const titleStyle = {
    textAlign: 'center',
    border: '2px solid black',
    marginLeft: 10,
    marginRight: 10,
  }
  const bioTypography = {
    margin: 0,
  }
  const gridContainer = {
    display: 'grid',
    gap: 0,
    backgroundColor: 'green',
    gridTemplateColumns: 'auto auto auto auto auto',
    marginTop: 5
  }
  const leftBioItem = {
    gridColumnStart: 1,
    gridColumnEnd: 5,
    backgroundColor: 'orange',
    border: '1px solid black'
  }
  const rightBioItem = {
    gridColumnStart: 5,
    gridColumnEnd: 6,
    backgroundColor: 'orange',
    border: '1px solid black',
    display: 'flex', // flexbox property
    alignItems: 'center', // vertically centre child div
    justifyContent: 'center', // horizontally center the child div
  }
  const leftHistoryItem = {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    backgroundColor: 'orange',
    border: '1px solid black'
  }
  const rightHistoryItem = {
    gridColumnStart: 3,
    gridColumnEnd: 6,
    backgroundColor: 'orange',
    border: '1px solid black'
  }
  return (
    <>
      <div style={titleStyle} >Pokedex</div>
      <div style={gridContainer}>
        <div style={leftBioItem}>
          <p style={bioTypography}>Species: Lorem Ipsum</p>
          <p style={bioTypography}>Name: Lorem Ipsum</p>
          <p style={bioTypography}>Github: kll3j#lkwerlke</p>
          <p style={bioTypography}>LinkedIn: sdfsdfsdf</p>
          <p style={bioTypography}>Email: 124@gmai.com</p>


          
        </div>
        <div style={rightBioItem}>
          <img style={imgContainerStyle} src={image}></img>
        </div>
        <div style={leftHistoryItem}>1</div>
        <div style={rightHistoryItem}>2</div>
      </div>
    </>
  )
}
const History = () => {
  return (
    <div style={{ backgroundColor: 'orange' }}>
      <h3 style={{ marginTop: '0' }}>Projects</h3>
      <ul>
        <li onClick={() => { console.log(3) }}>Project 1</li>
        <li>Project 2</li>
      </ul>
      <h3>Experience</h3>
      <ul>
        <li>Experience 1</li>
        <li>Experience 2</li>
      </ul>
    </div>
  )
}
const Display = () => {
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


  // states
  const [window, setWindow] = useState('bio')

  if (window === 'bio') {
    return (
      <div style={{ backgroundColor: 'red', width: 300, }}>
        <img style={topCoverStyle} src={deviceCover}></img>

        <Bio changeWindow={setWindow} />
        {/* <History /> */}
        <img style={bottomCoverStyle} src={deviceCover}></img>
      </div>
    )
  } else if (window === 'project 1') {
    return (
      <div style={{ backgroundColor: 'red', width: 300, height: 500 }}>
        <button onClick={() => setWindow('bio')}>Back</button>
        <h3>Project 1</h3>
        <ul>
          <li>Description</li>
          <li>image</li>

        </ul>
      </div>
    )
  }
}
const device = () => {
  const containerStyle = {
    display: 'flex', // flexbox property
    alignItems: 'center', // vertically centre child div
    justifyContent: 'center', // horizontally center the child div
    height: '100vh', // Set the height to 100% of the viewport height
  };
  return (
    <div style={containerStyle}>
      <Display />
    </div>
  )
}

export default device;
