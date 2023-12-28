import userImage from './profilePic2Edited.png'
import shortcutsTeamImage from './shortcutsTeamUpdated.png'
import ministryLogo from './ministryOfEducationLogoUpdated.png'
import eMonitorScreen from './eMonitorSmallerUpdated.png'
const userData = {
    name: 'Vinayak Verma',
    userImage: userImage,
    email: 'vinayak.vverma@gmail.com',
    history: {
        Projects: {
            Shortcuts: {
                link: 'https://github.com/vermaVinayak/shortcuts-stars-v',
                description: `
                 Collaborated on a 2-day hackathon to create a tourist tips app.
                 Which showcased teamwork, prowess with ReactJS and rapid problem-solving 
                 skills.
                `,
                imgSource: shortcutsTeamImage
            },
            pronounce: {
                link: 'https://namehub-d7807.firebaseapp.com/database',
                description: `
                    In high school, I addressed the cultural issue of mispronounced 
                    names through a web application. Developing a platform that stored and provided 
                    access to correct pronunciations. This endeavor underscored my commitment to 
                    leveraging technology for positive social impact.
                `,
                imgSource: ministryLogo,
            },
            eMonitor: {
                link: 'https://github.com/vermaVinayak/Smart-Energy-Monitor-UI',
                description: `
                    This project showcases my knowledge in using plain HTML, CSS and JS.
                    Working on an embedded systems project. I tasked myself to develop an UI 
                    to interact with our microcontroller. This inlclues Windows Task manager like 
                    theme display and buttons to turn on physical components.
                `,
                imgSource: eMonitorScreen,
            },
        },
        Experience: {
            Asbuilt: {
                bio: 'ksdfkdsf',
                projectInfo: 'sdfsdfsdf',
            },
            Tutor: {
                bio: 'ksdfkdsf',
                projectInfo: 'sdfsdfsdf',
            }
        },
        reference: {
            Carlo: {
                bio: 'ksdfkdsf',
                projectInfo: 'sdfsdfsdf',
            },
            Anthony: {
                bio: 'ksdfkdsf',
                projectInfo: 'sdfsdfsdf',
            }
        },
    }
}
export default userData;