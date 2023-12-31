import { useState } from 'react';
// import image from './pokemonFightBackground.webp'
import deviceCover from './assets/pokedexCover.png'
import backgroundImage from './assets/beachFightBackground.webp'
import userData from './assets/data'

const Details = ({ setDisplay, heading, description, img, link }) => {
  // styles
  const detailsContainer = {
    height: 300,
    marginLeft: 5,
    marginRight: 5,
  }

  return (
    <div style={detailsContainer}>
      <button style={{ color: 'white', backgroundColor: '#17cdd4', marginBottom: 5 }} onClick={() => setDisplay('')}>back</button>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid white' }}>
        <div style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          {heading} (<a style={{ color: 'white' }} target='_blank' rel="noreferrer" href={link}>link</a>)
        </div>
      </div>
      <div style={{ border: '1px solid white' }}>
        <div style={{ color: 'white', margin: 5 }}>{description}</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img alt='description' style={{ marginTop: 0, marginBottom: 5 }} src={img}></img>
        </div>
      </div>
    </div>
  )
}
const BioAndHistory = ({ setDisplay, setHeading, setDescription, setImg, setLink }) => {
  // styles
  const bioContainer = {
    display: 'flex',
    width: 300,
    justifyContent: 'flex-start'
  }
  const flexItem1 = {
    height: 100,
    width: 175,
    // backgroundColor: 'yellow',
    border: '1px solid white',
    margin: 5,
    padding: 0
  }
  const flexItem2 = {
    height: 100,
    width: 100,
    // backgroundColor: 'yellow',
    border: '1px solid white',
    margin: 5
  }
  const displayTitle = {
    border: '1px solid white',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    marginLeft: 5,
    marginRight: 5,
    // backgroundColor: 'lightblue'
  }
  const historyColumn1 = {
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: 'lightgreen',
    width: 100,
    height: 25,
    margin: 5,
    color: 'white'
  }
  const historyColumn2 = {
    display: 'flex',
    // backgroundColor: 'orange',
    width: 175,
    height: 25,
    margin: 5,
    alignItems: 'center',
  }
  const bioInfo = {
    fontSize: 14,
    color: 'white'
  }

  // helper functions
  const handleButton = (heading, description, img, link) => {
    setHeading(heading)
    setDescription(description)
    setImg(img)
    setDisplay('Details')
    setLink(link)
  }

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
              key={nestedKey}
              onClick={() => {
                handleButton(
                  nestedKey,
                  data.history[key][nestedKey].description,
                  data.history[key][nestedKey].imgSource,
                  data.history[key][nestedKey].link
                )
              }}
              style={{
                marginRight: 2,
                width: 55,
                height: 20,
                fontSize: 8,
                padding: 0,
                color: 'white',
                backgroundColor: '#17cdd4'
              }}>
              {nestedKey}
            </button>)
          }
        }
      }
      template.push(
        <div key={key} style={{ display: 'flex' }}>
          <div style={historyColumn1}>{key}:</div>
          <div style={historyColumn2}>{content}</div>
        </div>
      )
    }
    return <div style={{ border: '1px solid white', marginBottom: 5, marginLeft: 5, marginRight: 5}}>{template}</div>
  }
  return (
    <div>
      {/* Display title */}
      <div style={displayTitle}>Pokedex</div>
      {/* Display bio */}
      <div style={bioContainer}>
        <div style={flexItem1}>
          <div style={{ marginLeft: 5, marginTop: 5 }}>
            <div style={bioInfo}>Name: Vinayak Verma</div>
            <div style={bioInfo}>Species: Developer</div>
            <div style={bioInfo}>Github:
              <a
                href='https://github.com/vermaVinayak'
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                link
              </a>
            </div>
            <div style={bioInfo}>LinkedIn:
              <a
                href='https://www.linkedin.com/in/vinayak-v-79497a137/'
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                link
              </a>
            </div>
            <div style={bioInfo}>Email:
              <a style={{color: 'white'}} href='mailto:vinayak.vverma@gmail.com'>link</a>
            </div>
          </div>
        </div>
        <div style={flexItem2}><img alt='profile' style={{ height: 100, }} src={userData.userImage}></img></div>
      </div>
      {/* Display project, experience etc... */}
      {displayHistory(userData)}
    </div>
  )
}
const Display = () => {
  // state
  const [display, setDisplay] = useState('')
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('link_test')
  const [img, setImg] = useState('')

  // conditional rendering
  if (display === 'Details') {
    return (
      <Details
        setDisplay={setDisplay}
        heading={heading}
        description={description}
        img={img}
        link={link}
      />
    )
  }
  // default
  return (
    <BioAndHistory
      setDisplay={setDisplay}
      setHeading={setHeading}
      setDescription={setDescription}
      setImg={setImg}
      setLink={setLink}
    />
  )
}
const Device = () => {
  // styles
  const topCoverStyle = {
    width: 300,
    height: 125,
    opacity: '1'
  }
  const bottomCoverStyle = {
    width: 300,
    height: 125,
    transform: 'rotate(180deg)'
  }
  const deviceScreen = {
    // backgroundColor: '#05b5fa',
    // opacity: '0.8',
    backgroundColor: 'rgba(25, 181, 250, 0.5)',
    height: 490,
    width: 300,
    borderRadius: 30
  }

  return (
    <div style={deviceScreen}>
      <img alt='device top cover' style={topCoverStyle} src={deviceCover}></img>
      <Display />
      <img alt='device bottom cover' style={bottomCoverStyle} src={deviceCover}></img>
    </div>
  )

  /*
  
  */
}
const Background = () => {

  // styles
  const backgroundStyle = {
    display: 'flex', // flexbox property
    alignItems: 'center', // vertically centre child div
    justifyContent: 'center', // horizontally center the child div
    backgroundColor: '#37a647', // must have incase image does not exist
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '125vw 100vh'
  }
  return (
    <div style={backgroundStyle}>
      <Device />
    </div>
  )
}
export default Background;
