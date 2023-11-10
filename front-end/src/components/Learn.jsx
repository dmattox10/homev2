import { useScreenWidth } from "../hooks/useScreenWidth"
const Learn = ({ setVisibleSection, headerRef, id }) => {
    let isMobile = useScreenWidth()
    return (
        <div className={isMobile ? 'bg-tall-warm' : 'bg-tall-warm br'}>
            <div className={isMobile ? 'medium exclusion' : 'medium screen br'}>Students Click Here to Schedule a Session!</div>
        </div>
    )
}

export default Learn