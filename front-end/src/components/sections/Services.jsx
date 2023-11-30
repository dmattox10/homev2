import { useEffect, useState } from "react"
import { useScreenWidth } from "../../hooks/useScreenWidth"
import Learn from '../Learn'
import Grow from "../Grow"

const Services = ({ setVisibleSection, headerRef, active }) => {

    let isMobile = useScreenWidth()

    const [service, setService] = useState('0')
    const handleMouseEnter = (e) => {
        setService(e.target.id)
    }

    const handleClick = (e) => {
        setService(e.target.id)
    }

   const services = [
        <Learn />,
        <Grow />
   ]

    return (
        <div className="section-content main">
            <p style={active ? {color: 'crimson'} : {color: 'white'}}>Services</p>
            <div className="hero-wrapper">
                <div className="hero">
                    <div className="block-0 ">
                        <div className="bg-warm">
                            <div onMouseEnter={(e) => handleMouseEnter(e)} onClick={(e) => handleClick(e)} id='0' className={service == '0' ? isMobile ? 'big exclusion' : 'big screen' : isMobile ? 'big screen' : 'big multiply'}>LEARN</div>
                        </div>
                    </div>
                    <div className="block-1 bl">
                        <div className="bg-cool bl">
                            <div onMouseEnter={(e) => handleMouseEnter(e)} onClick={(e) => handleClick(e)} id='1' className={service == '1' ? isMobile ? 'big exclusion' : 'big screen' : isMobile ? 'big screen' : 'big multiply'}>GROW</div>
                        </div>
                    </div>
                    <div className="block-2 br">{services[service]}</div>
                </div>
            </div>
        </div>
    )
}

export default Services