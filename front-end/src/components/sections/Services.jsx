import { useEffect, useState } from "react"
import Learn from '../Learn'
import Grow from "../Grow"

const Services = ({ setVisibleSection, headerRef, active }) => {
    const [service, setService] = useState('0')
    const handleMouseEnter = (e) => {
        console.log(e)
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
                    <div className="block-0 ">
                        <div className="bg-warm">
                            <div onMouseEnter={handleMouseEnter} id='0' className={service == '0' ? 'big screen' : 'big multiply'}>LEARN</div>
                        </div>
                    </div>
                    <div className="block-1 bl">
                        <div className="bg-cool bl">
                            <div onMouseEnter={handleMouseEnter} id='1' className={service == '1' ? 'big screen bl' : 'big multiply bl'}>GROW</div>
                        </div>
                    </div>
                    <div className="block-2 br">{services[service]}</div>
                </div>
            </div>
        </div>
    )
}

export default Services