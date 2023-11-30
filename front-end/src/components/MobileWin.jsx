import { useState, useEffect, cloneElement, Children } from "react"
import cuid from 'cuid'
const MobileWin = (props) => {
    const { children, title, visibleSection } = props
    const [active, setActive] = useState(false)
    useEffect(() => {
        if (title === visibleSection) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    }, [title, visibleSection])
    let dots = []
    for (let i = 0; i < 3; i++) {
        dots.push(
            <div key={cuid()} className="navigator">
            {
                active ? <span className="icon red icon-border"></span> : <span className="icon grey icon-border"></span>
            }
            </div>)
    }
    return (
        <div className="main-window">
                <div className="navigation">
                    {dots}
                </div>
            <div className="window-content">
                {
                    Children.map(children, (child) => {
                        return cloneElement(child, {
                            active
                        })
                    })
                }
            </div>
        </div>
    )
}

export default MobileWin