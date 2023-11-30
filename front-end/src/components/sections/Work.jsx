const Work = ({ setVisibleSection, headerRef, id, active }) => {
    return (
        <div className="section-content main">
            <p style={active ? {color: 'crimson'} : {color: 'white'}}>Work</p>
        </div>
    )
}

export default Work