import { useState } from 'react';
// import image from './pokemonFightBackground.webp'
import deviceCover from './assets/pokedexCover.png'
import userData from './assets/data';

const Details = ({heading, description, img, updateParentDisplay}) => {
  // styles
  const detailsContainer = {
    height: 300,
  }
  return (
    <div style={detailsContainer}>
      <button onClick={() => {updateParentDisplay('')}}>back</button>
      <div>{heading}</div>
      <div>{description}</div>
      <img src={img}></img>

    </div>
  )
}
const BioAndHistory = ({setParentDisplay, fetchData}) => {
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
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    width: 100,
    height: 25,
    margin: 5,
  }
  const historyColumn2 = {
    display: 'flex',
    backgroundColor: 'orange',
    width: 175,
    height: 25,
    margin: 5,
    alignItems: 'center'
  }

  // helper functions
  const displayHistory = (data) => {
    let template = []
    let content = []

    // access stored data
    for (let key in data.history) {
      content = []
      if (data.history.hasOwnProperty(key)) {
        // access further nested data
        for (let nestedKey in data.history[key]) {
          if (data.history.hasOwnProperty(key)) {
            content.push(<button
            onClick={() => {
              fetchData(nestedKey, 'description', 'img source')
              setParentDisplay('Details')
            }}
              style={{
                marginRight: 2,
                width: 58,
                height: 20,
                fontSize: 10,
                padding: 0
              }}>
              {nestedKey}
            </button>)
          }
        }
      }
      template.push(
        <div style={{ display: 'flex' }}>
          <div style={historyColumn1}>{key}:</div>
          <div style={historyColumn2}>{content}</div>
        </div>
      )
    }
    return template
  }
    return (
      <div style={{ backgroundColor: 'purple' }}>
        {/* Display title */}
        <div style={displayTitle}>Pokedex</div>
        {/* Display bio */}
        <div style={bioContainer}>
          <div style={flexItem1}>item 1</div>
          <div style={flexItem2}>item 2</div>
        </div>
        {/* Display project, experience etc... */}
        {displayHistory(userData)}
      </div>
    )
}
const Display = () => {
  const [display, setDisplay] = useState('')

  // variables and callbacks for fetching child component data
  let heading = ''
  let description = ''
  let img
  let fetchData = (fetchedHeading, fetchedDescription, fetchedImg) => {
    heading = fetchedHeading
    description = fetchedDescription
    img = fetchedImg
  }
  console.log(heading, description, img)
  // conditional rendering
  if (display === 'Details') return <Details heading={display} description={description} img={img} updateParentDisplay={setDisplay}/>
  // default
  return  <BioAndHistory setParentDisplay={setDisplay} fetchData={fetchData}/>
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
  const deviceScreen = {
    backgroundColor: 'white',
  }

  return (
    <div style={containerStyle}>
      <div style={deviceScreen}>
        <div style={{ backgroundColor: 'light green', width: 300, }}>
          <img alt='device top cover' style={topCoverStyle} src={deviceCover}></img>
          <Display />
          <img alt='device bottom cover' style={bottomCoverStyle} src={deviceCover}></img>
        </div>
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
