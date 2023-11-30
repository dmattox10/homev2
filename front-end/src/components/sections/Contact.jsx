import { useInView } from "react-intersection-observer"

const Contact = (props) => {
    const { active } = props
    return (
        <div className="section-content main">
            <p style={active ? {color: 'crimson'} : {color: 'white'}}>Contact</p>
        </div>
    )
}

export default Contact