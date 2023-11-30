import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft, faStarHalfAlt, faCircleRight, faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarAlt } from '@fortawesome/free-regular-svg-icons'
import ReactCountryFlag from 'react-country-flag'

const Entry = (props) => {
    const { review, goNext, goPrev } = props
    const { username, country, stars, txt } = review
    const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
      )

    const createStar = (stars, index) => {
      let Star
      if (stars >= index) {
        Star = <FontAwesomeIcon key={index} color='crimson' icon={faStar} />
      } else if (stars > index -1) {
        Star = <FontAwesomeIcon key={index} color='crimson' icon={faStarHalfAlt} />
      } else {
        Star = <FontAwesomeIcon key={index} color='eee' icon={faStarAlt} />
      }
      return Star
    }
    const renderStars = (stars) => {
        let content = []
        for (let i = 1; i < 6; i++) {
            let Star = createStar(stars, i)
            content.push(Star)
        }
        return content
    }
    let countryString = `en-${country}`
    return (
        <div className="carousel-item active text-center p-4">
        <blockquote className="blockquote text-center">
          <div className='review'>
          <p className="mb-0"><FontAwesomeIcon color='crimson' icon={faQuoteLeft}/>
            {txt}
          </p>
          <p className='blockquote-footer'>
          -{username}
          </p>
          <p className="client-review-stars">
          <FontAwesomeIcon style={{float: 'left'}} color='crimson' icon={faCircleLeft} size='xl' onClick={() => goPrev(true)}/>

            {renderStars(stars)}
            <FontAwesomeIcon style={{float: 'right'}} color='crimson' icon={faCircleRight} size='xl' onClick={() => goNext(true)}/>

          </p>
         
          </div>
          
        </blockquote>
      </div>
    )
}

export default Entry