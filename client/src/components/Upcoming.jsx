import IpoCard from "./IpoCard"
import data from "../data"
import { useEffect, useRef, useState } from "react"

export default function Upcoming() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const containerScroll = useRef(null);
    let cards = 0;

    useEffect(() => {
        function setWidth() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", setWidth);

        return function () {
            window.removeEventListener("resize", setWidth);
        }
    }, [])

    const ipoData = data.map((item) => {
        if (item.status === "upcoming") {
            cards++;
            return <IpoCard key={item.id} {...item} />
        }
    })

    const dots = data.map((item) => {
        if (item.status === "upcoming") {
            return <span className="dot" key={item.id}></span>
        }
    })

    function showScrollButton() {
        if (cards < 2 && windowWidth > 1024) {
            return false;
        }
        else if (cards > 2 && windowWidth > 1024) {
            return true;
        }
        else if (cards >= 2 && windowWidth < 1024) {
            return true;
        }
        else {
            return false;
        }
    }

    return <>
        <section className="upcoming-ipo-list">
            {showScrollButton() && <div className="previous" onClick={() => {
                {
                    windowWidth > 768 ?
                    containerScroll.current.scrollBy({ left: -572, behavior: "smooth" })
                    :
                    containerScroll.current.scrollBy({ left: -320, behavior: "smooth" })
                }
            }}>
                <svg width="27" height="46" viewBox="0 0 27 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 43L3 23L24 3" stroke="#0078FF" strokeOpacity="0.49" strokeWidth="3" strokeLinecap="square" />
                </svg>
            </div>}
            <section className="card-container" ref={containerScroll}>
                {ipoData}
            </section>
            {showScrollButton() && <div className="scroll-dots">
                {dots}
            </div>}
            {showScrollButton() && <div className="next" onClick={() => {
                {
                    windowWidth > 768 ?
                    containerScroll.current.scrollBy({ left: 572, behavior: "smooth" })
                    :
                    containerScroll.current.scrollBy({ left: 320, behavior: "smooth" })
                }
            }}>
                <svg width="27" height="51" viewBox="0 0 27 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L24 25.5L3 48" stroke="#0078FF" strokeWidth="3" strokeLinecap="square" className="next" />
                </svg>
            </div>}
        </section>
    </>
}