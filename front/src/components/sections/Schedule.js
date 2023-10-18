import { useInView } from "react-intersection-observer"
import { useContext, useEffect, useState, useRef } from "react"
import { MyContext } from "../../../../front-end/contexts/myContext";
const Schedule = ({ setVisibleSection }) => {
    const { setPro, isPro } = useContext(MyContext)
    const [isChecked, setChecked] = useState(true); 
    // const labels = document.querySelectorAll(".accordionz-item__label");
    // const tabs = document.querySelectorAll(".accordionz-tab");
    const { ref } = useInView({
        threshold: 0.5,
        // triggerOnce: true,
        onChange: (inView, entry) => {
            if (inView) {
                setVisibleSection(entry.target.id)
            }
        }
    })
    const handleChange = () => { 
    
        setChecked(!isChecked)
        setPro(!isPro) 
        
      }; 
    // const item = target.classList.contains("accordionz-tab")
    //     ? target
    //     : target.parentElement;
    // const group = item.dataset.actabGroup;
    // const id = item.dataset.actabId;
    // function toggleShow() {
    //     tabs.forEach(function (tab) {
    //         if (tab.dataset.actabGroup === group) {
    //             if (tab.dataset.actabId === id) {
    //                 tab.classList.add("accordionz-active");
    //             } else {
    //                 tab.classList.remove("accordionz-active");
    //             }
    //         }
    //     });

    //     labels.forEach(function (label) {
    //         const tabItem = label.parentElement
    //         if (tabItem.dataset.actabGroup === group) {
    //             if (tabItem.dataset.actabId === id) {
    //                 tabItem.classList.add("accordionz-active");
    //             } else {
    //                 tabItem.classList.remove("accordionz-active");
    //             }
    //         }
    //     });
    //     if (id === 1) {
    //         setPro(true)
    //         console.log(isPro)
    //     }
    //     else {
    //         setPro(false)
    //         console.log(isPro)
    //     }
    // }

    // labels.forEach(function (label) {
    //     label.addEventListener("click", toggleShow);
    // });

    // tabs.forEach(function (tab) {
    //     tab.addEventListener("click", toggleShow);
    // });
    return (
        <section id="schedule" ref={ref}>
            <div className="section-body">
                <h2 className="heading">Click/Tap a time type above or below to Schedule</h2>
                <div className="row center">
                <div>
                <span className="switcher switcher-1">
                                <input type="checkbox" id="switcher-1" 
                                // value={this.props.value}
                                checked={isChecked}
                                onChange={handleChange}/>
                                <label htmlFor="switcher-1"></label>
                            </span>
                </div>
                        <div className="platform">
                            <div className="content">
                                <div className="accordionz-item accordionz-active" data-actab-group="0" data-actab-id="0">
                                    <div className="accordionz-item__container">
                                        <div className="column-hours column-4">
                                            <div className="row-hours">
                                                <div className="column-hours column-12 hours office"><span className="tall"><p>&nbsp;</p><p className="vc">Office Hours</p><p>(Click Here!)</p>{isPro ? (<p><s>$30</s>&nbsp;$27</p>) : (<p><s>$55</s>&nbsp;$49.50</p>)}</span></div>
                                            </div>
                                        </div>
                                        <div className="column-hours column-4">
                                            <div className="row-hours">
                                                <div className="column-hours column-12 hours off"><span className="tall"><p>&nbsp;</p><p className="vc">Off Hours</p><p>(Click Here!)</p>{isPro ? (<p><s>$55</s>&nbsp;$49.50</p>) : (<p><s>$80</s>&nbsp;$72</p>)}</span></div>
                                            </div>
                                        </div>
                                        <div className="column-hours column-4">
                                            <div className="row-hours">
                                                <div className="column-hours column-12 hours retainer"><span className="tall"><p>&nbsp;</p><p className="vc">Retainer Hours</p><p>(Click Here!)</p><p><s>$80</s>&nbsp;$72</p></span></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </section>
    )
}

export default Schedule