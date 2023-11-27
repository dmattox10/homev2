import React, { useRef } from 'react'
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

const Carousel = () => {
    const ref = useRef(null)

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <Swiper ref={ref}>
        {
            reviews.map((review, index) => (
                <div key={index} className="carousel-inner" role="listbox"><Entry review={review} /></div>
            ))
        }
      </Swiper>
      <button onClick={() => goPrev()}>Prev</button>
      <button onClick={() => goNext()}>Next</button>
    </div>
  )
}

export default Carousel