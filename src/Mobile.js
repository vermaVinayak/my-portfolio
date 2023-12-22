import { useState } from 'react';
import image from './pokemonFightBackground.webp'

const Bio = ({changeWindow}) => {
  const imgContainerStyle = {
    display: 'flex', // flexbox property
    alignItems: 'center', // vertically centre child div
    justifyContent: 'center', // horizontally center the child div
    height: 250, // Set the height to 100% of the viewport height
    backgroundColor: 'blue'
  }
  return (
    <div style={{ backgroundColor: 'green', width: 300 }}>
      <div style={imgContainerStyle}>
        <img style={{ width: 200, height: 200 }} src={image} alt='background'></img>
      </div>
      <ul style={{marginBottom: 0, marginTop: 0}}>
        <li>Name: Lorem Ipsum</li>
        <li>Age: 2343</li>
        <li onClick={() => {console.log('child clicked!'); changeWindow('project 1')}}>Hobbies: Guitar</li>
      </ul>
    </div>
  )
}
const History = () => {
  return (
    <div style={{ backgroundColor: 'orange' }}>
      <h3 style ={{marginTop:'0'}}>Projects</h3>
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
const Pokedex = () => {
  const [window, setWindow] = useState('bio')

  if (window === 'bio') {
    return (
      <div style={{ backgroundColor: 'red', width: 300, height: 500 }}>
        <Bio changeWindow={setWindow} />
        <History/>
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
const Background = () => {
  const containerStyle = {
    display: 'flex', // flexbox property
    alignItems: 'center', // vertically centre child div
    justifyContent: 'center', // horizontally center the child div
    height: '100vh', // Set the height to 100% of the viewport height
  };
  return (
    <div style={containerStyle}>
      <Pokedex />
    </div>
  )
}

export default Background;
