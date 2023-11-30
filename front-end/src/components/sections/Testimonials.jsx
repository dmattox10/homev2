import Carousel from '../Carousel'

const Testimonials = ({ setVisibleSection, headerRef, id, active }) => {


    return (
        <div className="section-content main">
            <p className='heading' style={active ? { color: 'crimson' } : { color: 'white' }}>Testimonials</p>
            <div className='carbon'>
            <Carousel />
            </div>
        </div>
    )
}

export default Testimonials

