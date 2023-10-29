import { useEffect, useState } from "react"
import Learn from '../Learn'
import Grow from "../Grow"

const Services = ({ setVisibleSection, headerRef, active }) => {
    const [service, setService] = useState('0')
    const handleMouseEnter = (e) => {
        setService(e.target.id)
    }

   const services = [
        <Learn />,
        <Grow />
   ]

    return (
        <div className="section-content">
            <p style={active ? {color: 'crimson'} : {color: 'white'}}>Services</p>
            <div>
                <div className="hero">
                    <div className="block-0">
                        <div className="bg-code">
                            <div onMouseEnter={handleMouseEnter} id='0' className={service == '0' ? 'text screen' : 'text multiply'}>LEARN</div>
                        </div>
                    </div>
                    <div className="block-1">
                        <div className="bg-pitt">
                            <div onMouseEnter={handleMouseEnter} id='1' className={service == '1' ? 'text screen bl' : 'text multiply bl'}>GROW</div>
                        </div>
                    </div>
                    <div className="block-2">{services[service]}</div>
                </div>
            </div>
        </div>
    )
}

export default Services