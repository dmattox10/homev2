import { useScreenWidth } from "../hooks/useScreenWidth"

const Grow = ({ setVisibleSection, headerRef, id }) => {
    let isMobile = useScreenWidth()

    return (
        <div className={isMobile ? 'bg-tall-cool' : 'bg-tall-warm br'}>
           <div className={isMobile ? 'medium exclusion' : 'medium screen br'}>Business</div>
        </div>
    )
}

export default Grow