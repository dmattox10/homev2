import { useInView } from "react-intersection-observer"

const Services = ({ setVisibleSection }) => {
    const { ref } = useInView({
        threshold: 0.5,
        // triggerOnce: true,
        onChange: (inView, entry) => {
          if (inView) {
            setVisibleSection(entry.target.id)
          }
        }
      })
    return (
        <section id="services" ref={ref}>
            <div className="section-body">
                <h2 className="heading">My Services</h2>
                <div>
                    <div className="platform">
                        <div className="content">
                        <p>
                        I am an experienced full-stack web developer and programmer dedicated to helping students and engineers overcome their coding challenges and achieve their goals. With a background in self-taught programming and formal training from Lambda School's boot camp program, as well as a proven track record in the field, I bring a wealth of expertise to the table. Having worked on diverse projects using modern frameworks and technologies like React, Express, MongoDB, & MySQL, developed an Android app, designed a Unity video game, and built full-stack applications with multiple database technologies as well as different deployment configurations including Docker, I understand the intricacies of web development from both practical and theoretical perspectives.
                    </p>
                        </div>
                    </div>
                    <div className="platform">
                        <div className="content">
                        <p>
                        I am passionate about sharing my knowledge and helping others navigate the world of coding. Whether you're a student struggling with the fundamentals or an engineer facing complex challenges, I am here to provide personalized and effective assistance. With a patient and supportive approach, I will guide you through your coding journey and help you unlock your full potential. Together, we will tackle difficulties, debug code, and find innovative solutions. Reach out to me for hourly services tailored to your specific needs, and let's embark on a transformative coding experience.
                    </p>    
                        </div>
                    </div>
                    <div className="platform">
                        <div className="content">
                        <p>
                        If you are seeking assistance with complete software solutions rather than coding lessons, I invite you to reach out to me through the contact form. With my extensive experience in web development and a diverse background in creating various applications, I am well-equipped to provide comprehensive software solutions tailored to your specific requirements. Whether you need assistance in building a custom web application, optimizing an existing system, or solving complex technical challenges, I am committed to delivering high-quality results. Together, we can transform your ideas into robust and scalable software solutions that meet your business needs. Don't hesitate to get in touch to discuss your project in detail and explore how I can help bring your vision to life.
                    </p>                        
                        </div>
                    </div>
                    
                    

                </div>
            </div>
        </section>
    )
}

export default Services