const Testimonials = ({ setVisibleSection, headerRef, id, active }) => {
    return (
        <div className="section-content">
            <p style={active ? {color: 'crimson'} : {color: 'white'}}>Testimonials</p>
        </div>
    )
}

export default Testimonials