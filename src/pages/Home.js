import React from 'react'
import Care from '../components/landingPage/Care'
import Countdown from '../components/landingPage/Countdown'
import Events from '../components/landingPage/Events'
import Expert from '../components/landingPage/Expert'
import Feedback from '../components/landingPage/Feedback'
import Hero from '../components/landingPage/Hero'
import Schedule from '../components/landingPage/Schedule'
import Sick from '../components/landingPage/Sick'
import Subscribe from '../components/landingPage/Subscribe'

export default function Home() {
  return (
    <div>
      <Hero />
      <Sick />
      <Schedule />
      <Care />
      <Countdown />
      <Expert />
      <Feedback />
      <Events />
      <Subscribe />
    </div>
  )
}
