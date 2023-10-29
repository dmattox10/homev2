import { useState, useEffect, cloneElement, Children } from "react"
import cuid from 'cuid'
const Window = (props) => {
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
            active ? <span className="icon red"></span> : <span className="icon grey"></span>
        }
        </div>)
    }
    return (
        <div className="main-window">
            <div className="rule"></div>
            <div className="titlebar">
                <div className="navigation">
                    { dots }
                </div>
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

export default Window