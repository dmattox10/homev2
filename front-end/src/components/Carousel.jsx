import React, { useEffect, useRef, useState } from 'react'
import { useInterval } from '../hooks/useInterval';
import Entry from '../components/Entry'
// import 'bootstrap/dist/css/bootstrap.css'
import Swiper from 'react-id-swiper'
// import 'swiper/css/swiper.css'

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


const reviews = [
    {
        username: 'joekraemer149',
        country: 'US',
        stars: '5',
        txt: 'Daniel is the real deal! Quick to communicate and we always get the job done.'
    },
    {
        username: 'eclipez2',
        country: 'US',
        stars: '5',
        txt: 'Daniel is very down to earth and a genuine person. Coding genius as well. Highly recommend.'
    },
    {
        username: 'miker400',
        country: 'US',
        stars: '5',
        txt: 'Great work on creating a full stack solution, will use again.'
    },
    {
        username: 'deal77',
        country: 'US',
        stars: '5',
        txt: 'Daniel is an excellent tutor and mentor. He has lots of experience with JavaScript and different technologies. I would recommend his services. Services as described.'
    },
    {
        username: 'fastchase',
        country: 'US',
        stars: '5',
        txt: 'Daniel is a coding gangster. I told him I need to be babied and he took me through everything step by step and used his time efficiently. I plan on doing a lot more lessons with Daniel, he seems like a really smart guy.'
    },
    {
        username: 'dannysac1204',
        country: 'IN',
        stars: '5',
        txt: 'Great communication and technical skills. Would highly recommend'
    },
    {
        username: 'abrahamny_n',
        country: 'DE',
        stars: '5',
        txt: 'Would recommend to anyone who wants a very knowledgeable and experienced programmer. Communication was very clear and concise, no time wasting, results orientated and many, many tipps here and there.'
    },
    {
        username: 'qaraqan789',
        country: 'US',
        stars: '5',
        txt: 'One of the most experienced programmers I have ever met. Thank you so much for making my learning experience much more smooth and easier to understand.'
    },
    {
        username: 'yalicia_88',
        country: 'US',
        stars: '5',
        txt: 'Daniel was so friendly & helpful. He explained JavaScript concepts to me in a way I could understand better than my class. I would definitely recommend him! Thank you!'
    },
    {
        username: 'awilson80',
        country: 'US',
        stars: '5',
        txt: 'Very helpful and patient. Very accomodating for what I wanted help with and answered all of my questions. Also a great conversation partner which is a huge plus. Highly recommend!'
    }
]

function Carousel(props) {

    const ref = useRef(null)
    let [beenClicked, setClicked] = useState(false)
    let [currIndex, setIndex] = useState(0)
    let [delay, setDelay] = useState(4500)

  const goNext = (clicked) => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
    if (clicked) {
      setClicked(true)
      if (currIndex < 9) {
        setIndex(prevIndex => prevIndex + 1)
      }
      else {
        setIndex(0)
        for(let i = 0; i < 10; i ++) {
          goPrev(false)
        }
        
      }
    }
  };

  const goPrev = (clicked) => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
    if (clicked) {
      setClicked(true)
      if (currIndex == 0) {
        for(let i = 0; i < 10; i ++) {
          goNext(false)
        }
        setIndex(9)
      }
      else {
     
        setIndex(prevIndex => prevIndex - 1)

      }
    }
  }
  const run = () => {
    return useInterval(() => {
      if (!beenClicked) {
        if (currIndex < 10) {
          setIndex(prevIndex => prevIndex + 1)
          goNext(false)
        }
        else {
          setIndex(0)
          for(let i = 0; i < 10; i ++) {
            goPrev(false)
          }
        }
      }
    }, !beenClicked ? delay : null)
  }

  const reset = () => {
    return useInterval(() => {
      setClicked(false)
      run()
    }, 10000)
  }

  useEffect(() => {
    if (beenClicked) {
      reset()
    }
  }, [])
  run()
  return (
    <div className='main'>
      <Swiper ref={ref}>
        {
            reviews.map((review, index) => (
                <div key={index} className="carousel-inner" role="listbox"><Entry review={review} goNext={goNext} goPrev={goPrev} /></div>
            ))
        }
      </Swiper>
    </div>
  )
}

export default Carousel