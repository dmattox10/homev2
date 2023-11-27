import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarAlt } from '@fortawesome/free-solid-svg-icons'
import ReactCountryFlag from 'react-country-flag'

const Entry = (review) => {
    const { username, country, stars, txt } = review.review
    const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
      )
    const renderStars = (stars) => {
        let content = []
        for (let i = 0; i < 5; i++) {
            content.push(<FontAwesomeIcon key={i} color='crimson' icon={stars > (i + 1) ? stars > i ? faStarHalfAlt : faStar : faStarAlt} />)
        }
        return content
    }
    return (
        <div className="carousel-item active text-center p-4">
        <blockquote className="blockquote text-center">
          <p className="mb-0"><FontAwesomeIcon color='crimson' icon={faQuoteLeft}/>
            {txt}
          </p>
          <footer className="blockquote-footer">
            {username}
            <cite title={country}>
                <ReactCountryFlag
                className="emojiFlag"
                countryCode={`en-${country}`}
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label={country}
            />
            </cite>
          </footer>
          <p className="client-review-stars">
            {renderStars(review.stars)}
          </p>
        </blockquote>
      </div>
    )
}

export default Entry