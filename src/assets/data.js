import userImage from './profilePic2Edited.png'
import shortcutsTeamImage from './shortcutsTeamUpdated.png'
import ministryLogo from './ministryOfEducationLogoUpdated.png'
import eMonitorScreen from './eMonitorSmallerUpdated.png'
import asbuiltImage from './asbuiltGetTogetherUpdated.jpg'
import part1AssistanceImage from './part1AssistanceCentreUpdated.jpg'
import carloImage from './carloImageUpdated.jpg'
import anthonyImage from './garyOakImageUpdated.jpg'

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
                    access to correct pronunciations. This underscored my commitment 
                    for positive social impact.
                `,
                imgSource: ministryLogo,
            },
            eMonitor: {
                link: 'https://github.com/vermaVinayak/Smart-Energy-Monitor-UI',
                description: `
                    This project showcases my knowledge in using plain HTML, CSS and JS.
                    Working on an embedded systems project. I tasked myself to develop an UI 
                    to interact with our microcontroller. This includes Windows Task manager themed UI.
                `,
                imgSource: eMonitorScreen,
            },
        },
        Experience: {
            Asbuilt: {
                link: 'ksdfkdsf',
                description: `
                    During my 3-month internship at Asbuilt Digital, 
                    I honed my skills in machine learning, data analysis, 
                    and object-oriented programming (OOP) with Python. 
                `,
                imgSource: asbuiltImage,
            },
            Mentor: {
                link: 'ksdfkdsf',
                description: `
                     Leadership, perseverance and humility are qualities I got an opportunity to 
                     exercise while mentoring. This experience has enhanced my emotional intelligence 
                     which is directly linked to my teamwork.
                `,
                imgSource: part1AssistanceImage,
            }
        },
        References: {
            Carlo: {
                link: `https:/www.linkedin.com/in/carlo- carbonilla-02050b190/`,
                description: (<div>
                    Carlo Carbonilla
                    <br />
                    Junior Data Scientist @ AsbuiltDigital
                    <br />
                    Click on link to forward to his LinkedIn.
                </div>),
                imgSource: carloImage,
            },
            Anthony: {
                link: `blank`,
                description: (<div>
                    Anthony Hunter
                    <br />
                    Manager @ Dollar Dealers
                    <br />
                    Phone no: 020 4085 6561
                </div>),
                imgSource: anthonyImage,
            }
        },
    }
}
export default userData;