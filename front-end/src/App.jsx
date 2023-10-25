import { useState, useRef, useEffect } from 'react';
import { MyContext } from '../contexts/myContext'


import SectionWithObserver from './components/SectionWithObserver';

import Navbar from './components/Navbar';
import Contact from './components/sections/Contact'
import Services from './components/sections/Services'
import Hours from './components/sections/Hours'
import Testimonials from './components/sections/Testimonials'
import Work from './components/sections/Work'

const App = () => {
  const [isPro, setPro] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const menus = [
    {
      text: 'Services',
      section: 'services',
      component: Services
    },
    {
      text: 'Testimonials',
      section: 'testimonials',
      component: Testimonials
    },
    {
      text: 'Work',
      section: 'work',
      component: Work
    },
    {
      text: 'Contact Me',
      section: 'schedule',
      component: Contact
    }]

  // const contents = [
  //   About,
  //   Services,
  //   Hours,
  //   Schedule,
  //   Work
  // ]

  const [visibleSection, setVisibleSection] = useState(menus[0]);
  const headerRef = useRef();
  return (
    <MyContext.Provider value={{ isPro, setPro, visibleSection, menus }}>
      <Navbar setNavOpen={setNavOpen} navOpen={navOpen} menus={menus} headerRef={headerRef} visibleSection={visibleSection} />
      <div className='App'>
        <div className='wrap'>
        {menus.map((Entry, index) => (
          <SectionWithObserver id={Entry.section} key={index} {... { setVisibleSection, headerRef, navOpen, visibleSection }} >
            <Entry.component />
          </SectionWithObserver>
        ))}
        </div>
      </div>
    </MyContext.Provider>
  )
}

export default App
