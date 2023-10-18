import { useInView } from 'react-intersection-observer'
import Card from '../Card'
const Work = ({ setVisibleSection }) => {
    const { ref } = useInView({
        threshold: 0.5,
        // triggerOnce: true,
        onChange: (inView, entry) => {
          if (inView) {
            setVisibleSection(entry.target.id)
          }
        }
      })

      const cards = [
        {
            img: 'assets/img/magic.png',
            alt: 'Sorting Hat',
            title: 'Flip Cards Sorting Hat',
            figTitle: 'React, ContextAPI',
            figText: 'Custom CSS, Components, Dynamic UI',
            tech: 'Front-End',
            description: 'Sorting Hat Quiz with dynamic color-changing progress bar.',
            onClick: () => window.location.href='https://magic.danielmattox.com'

        },
        {
            img: 'assets/img/tacotaco.png',
            alt: 'Taco Taco Ingredient and Recipe API',
            title: 'Taco Taco API',
            figTitle: 'Express & MySQL',
            figText: 'Microservice Architecture, JWT',
            tech: 'Back-End',
            description: 'RESTFully serving TacoFancy data! Refactored from MongoDB.',
            onClick: () => window.location.href='https://tacotaco.danielmattox.com'
        },
        {
            img: 'assets/img/pw.png',
            alt: 'Password Checker',
            title: 'PW Password Checker',
            figTitle: 'React, ContextAPI',
            figText: 'XoN API access, Suspenseful loading',
            tech: 'Front-end',
            description: 'Safely checks whether or not a password has been leaked in any data breach.',
            onClick: () => window.location.href='https://pw.danielmattox.com' 
        }
      ]
    return (
        <section id='work' ref={ref}>
            <div className='section-body'>
                <h2 className='heading'>Samples of my work</h2>
                <div>
                    <ul className='cards_'>
                        {
                            cards.map((card, index) => (
                                <Card card={card} key={index} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Work