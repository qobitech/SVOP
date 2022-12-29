import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import { LandingPageContainer } from './styled'
import { IStates } from '../../../interface/IReducer'
import Jumbotron from './jumbotron'
import Header from './header'
import About from './about'
import Instructions from './instructions'
import CTA from './cta'
import Organisers from './organisers'
// import { IActions } from '../../../interface/IAction'

const LandingPage: React.FC = () => {
  return (
    <DataWrapper>
      <LandingPageChild />
    </DataWrapper>
  )
}

interface ILandingPageChild {
  states?: IStates
}

const LandingPageChild: React.FC<ILandingPageChild> = ({
  states,
  ...props
}) => {
  const title =
    'The National Association Of Students Of English And Literary Studies (NASELS) Dinner/Award Night Elections.'
  const description = `NASELS AWARD AND DINNER NIGHT is an annual event hosted by the National Association of Students of English and Literary Studies(NASELS). This edition is proudly sponsored by Nasels Uniport. It may interest you to know that NASELS is the umbrella body created to cater for the welfare and needs of every student of English studies Department.
  A good thing to know is that this year’s Nasels dinner night will feature two exciting events; award presentations to outstanding students and pageantry for Mr/Miss Nasels uniport.`
  const instructions = `
  <ol>
    <li>Click on the <span><a>Get Started</a></span> button.</li>
    <li>Input your <span><a>matriculation number</a></span>.</li>
    <li>Select the category.</li>
    <li>Vote your preferred candidate.</li>
  </ol>
  `
  const organizers = `
  <ul>
    <li>Gad Baridoma <span><a>(Nasels Uniport President)</a></span>.</li>
    <li>Destiny Owegwem <span><a>(Chairman Nasels dinner night Planning committee)</a></span>.</li>
    <li>Jane Enyeribe <span><a>(Ag Director of Socials)</a></span>.</li>
    <li>Joy Abolarin <span><a>(Secretary planning committee)</a></span>.</li>
    <li>Chinenye Nwachukwu <span><a>(member)</a></span>.</li>
    <li>Mr Valentine Onwugbolu <span><a>(member)</a></span>.</li>
    <li>Success Godwin <span><a>(member)</a></span>.</li>
  </ul>
  `
  const ctas = [
    {
      id: 1,
      title: 'Get Started',
      url: '',
      isExternal: false
    }
  ]

  return (
    <LandingPageContainer>
      <Jumbotron />
      <Header title={title} categories={5} shareLinks={[]} totalVotes={4500} />
      <About description={description} />
      <Organisers organisers={organizers} />
      <Instructions title="How To Vote" instructions={instructions} />
      <CTA ctas={ctas} />
    </LandingPageContainer>
  )
}

export default LandingPage
