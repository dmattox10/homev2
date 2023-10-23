import { useInView } from "react-intersection-observer"
import { useScreenWidth } from "../hooks/useScreenWidth"
const SectionWithObserver  = (props) => {
  const { children, setVisibleSection, id, navOpen } = props
  const { ref } = useInView({
    threshold: 0.5,
    // triggerOnce: true,
    onChange: (inView, entry) => {
      if (inView) {
        setVisibleSection(entry.target.id);
        
        // entry.target.id !== "home"
        //   ? headerRef.current.classList.add("bg-white")
        //   : headerRef.current.classList.remove("bg-white")
      }
    }
  })
  let isMobile = useScreenWidth() 

  return (
    <section id={id} ref={ref}>
      <div className={isMobile ? navOpen ? "section-body hide" : "section-body" : 'section-body'}>
        {children}
      </div>
    </section>
  )
}

export default SectionWithObserver