import { useInView } from "react-intersection-observer"

const About = ({ setVisibleSection, headerRef }) => {
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
    return (
        <section id="about" ref={ref}>
            <div className="section-body">
                <div className="Iam">

                    <p>Hi, I'm</p>
                    <b>
                        <div className="innerIam">
                            <span>Daniel Mattox</span>
                            <span>Web Developer</span>
                            <span>Tutor</span>
                            <span>Maker</span>
                        </div>
                    </b>

                </div>
            </div>
        </section>
    )
}

export default About