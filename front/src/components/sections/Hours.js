import { useInView } from "react-intersection-observer"
import { useContext } from "react"
import { MyContext } from "../../../../front-end/contexts/myContext"
const Hours = ({ setVisibleSection }) => {
    const { isPro } = useContext(MyContext)
    const { ref } = useInView({
        threshold: 0.5,
        // triggerOnce: true,
        onChange: (inView, entry) => {
            if (inView) {
                setVisibleSection(entry.target.id)
            }
        }
    })

    let buttons = document.querySelectorAll('.column-hours.column-12.hours');
    for (let i = 0; i < buttons.length; i++) {
        let self = buttons[i];
        if (self.classList.contains('retainer')) {
            self.addEventListener('click', function (event) {
                // prevent browser's default action
                event.preventDefault();
                window.location.href = 'https://calendly.com/dmattox10/1-hour-retainer-rate'
                // call your awesome function here
                // MyAwesomeFunction(this); // 'this' refers to the current button on for loop
            }, false);
        }
        else if (self.classList.contains('office')) {
            self.addEventListener('click', function (event) {
                // prevent browser's default action
                event.preventDefault();
                if (isPro) {
                    window.location.href = 'https://calendly.com/dmattox10/1-hour-on-hours-rate-student-discount'
                } else {
                    window.location.href = 'https://calendly.com/dmattox10/1-hour-office-hours-rate'
                }
            }, false);
        }
        else {
            self.addEventListener('click', function (event) {
                // prevent browser's default action
                event.preventDefault();
                if (isPro) {
                    window.location.href = 'https://calendly.com/dmattox10/1-hour-off-hours-rate-student-discount'
                } else {
                    window.location.href = 'https://calendly.com/dmattox10/1-hour-off-hours-rate'
                }
            }, false);
        }
    }
    return (
        <section id="hours" ref={ref}>
            <div className="section-body">
                <h2 className="heading">How my hours are billed</h2>
                <div className="platform">
                    <div className="content">
                    <div className="row-hours" style={{margin: '0 auto'}}>
                    <p>Click Or Tap a Time Type to schedule!</p>
                </div>
                <div className="row" style={{margin: '0 auto'}}>
                    <div className="column-hours column-4" style={{margin: '0 auto'}}>
                        <div className="row-hours">
                            <div className="column-hours column-12 title">M-Th</div>
                            <div className="column-hours column-12 hours off">07-09</div>
                            <div className="column-hours column-12 hours office">09-12</div>
                            <div className="column-hours column-12 hours off">12-01</div>
                            <div className="column-hours column-12 hours office">01-05</div>
                            <div className="column-hours column-12 hours off">05-11</div>
                            <div className="column-hours column-12 hours retainer">11-07</div>
                        </div>
                    </div>
                    <div className="column-hours column-4" style={{margin: '0 auto'}}>
                        <div className="row-hours">
                            <div className="column-hours column-12 title">Friday</div>
                            <div className="column-hours column-12 hours off">07-09</div>
                            <div className="column-hours column-12 hours office">09-12</div>
                            <div className="column-hours column-12 hours off">12-01</div>
                            <div className="column-hours column-12 hours office">01-05</div>
                            <div className="column-hours column-12 hours retainer">05-11</div>
                            <div className="column-hours column-12 hours retainer">11-07</div>
                        </div>
                    </div>
                    <div className="column-hours column-4" style={{margin: '0 auto'}}>
                        <div className="row-hours">
                            <div className="column-hours column-12 title">Weekend</div>
                            <div className="column-hours column-12 hours retainer">&nbsp;</div>
                            <div className="column-hours column-12 hours retainer">&nbsp;</div>
                            <div className="column-hours column-12 hours retainer">&nbsp;</div>
                            <div className="column-hours column-12 hours retainer">&nbsp;</div>
                            <div className="column-hours column-12 hours retainer">&nbsp;</div>
                            <div className="column-hours column-12 hours retainer">&nbsp;</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="inset" style={{margin: '0 auto'}}>
                        <p className="">
                            Welcome! Please use the tabbed interface below to select a pricing tier, changing it only if you are Computer Science / Coding or Coding Bootcamp Student. If you are a student pursuing a programming career, please select the tab that corresponds to your student status. The student policy is aimed at helping others learn to code and prepare for a developer role. For all others please leave the interface as-is.
                        </p>
                    </div>                
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hours