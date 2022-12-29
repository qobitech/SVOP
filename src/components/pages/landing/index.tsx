import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import { LandingPageContainer } from './styled'
import { IStates } from '../../../interface/IReducer'
import Jumbotron from './jumbotron'
import Header from './header'
import About from './about'
import Instructions from './instructions'
import CTA from './cta'
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
  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  const instructions = `
  <ol>
    <li>Click on the <span><a>Get Started</a></span> button.</li>
    <li>Input your <span><a>matriculation number</a></span>.</li>
    <li>Select the category.</li>
    <li>Vote your preferred candidate.</li>
  </ol>
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
      <Instructions title="How To Vote" instructions={instructions} />
      <CTA ctas={ctas} />
    </LandingPageContainer>
  )
}

export default LandingPage
