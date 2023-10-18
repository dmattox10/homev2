import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'

import About from "./components/sections/About"
import Services from "./components/sections/Services"
import Hours from "./components/sections/Hours"
import Schedule from "./components/sections/Schedule"
import Work from "./components/sections/Work"
import SectionWithObserver from '../../front-end/src/components/SectionWithObserver'

import { MyContext } from '../../front-end/contexts/myContext'
function App() {
  const [isPro, setPro] = useState(false)

  const menus = [
    {
      text: 'About',
      section: 'about'
    },
    {
      text: 'Services',
      section: 'services'
    },
    {
      text: 'Office Hours',
      section: 'hours'
    },
    {
      text: 'Schedule Now',
      section: 'schedule'
    },
    {
      text: 'My Work',
      section: 'work'
    }]

  const [visibleSection, setVisibleSection] = useState(menus[0]);
  const headerRef = useRef();

  const contents = [
    About,
    Services,
    Hours,
    Schedule,
    Work
  ]

  const [navOpen, setNavOpen] = useState(false)

  return (
    <MyContext.Provider value={{ isPro, setPro, visibleSection, menus }}>
      <div className="App">
        <div className="grid">
          <Navbar setNavOpen={setNavOpen} navOpen={navOpen} menus={menus} headerRef={headerRef} visibleSection={visibleSection} />
          <article className="module desktop-10 tablet-10">
            {contents.map((Component, index) => (
              <SectionWithObserver setVisibleSection={setVisibleSection}>
                <Component {...{ setVisibleSection, headerRef }} key={index} />
              </SectionWithObserver>
            ))}
          </article>
            {/* <Footer /> */}
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
