import Carousel from '../Carousel'

const Testimonials = ({ setVisibleSection, headerRef, id, active }) => {


    return (
        <div className="section-content">
            <p style={active ? { color: 'crimson' } : { color: 'white' }}>Testimonials</p>
            <Carousel />
        </div>
    )
}

export default Testimonials

