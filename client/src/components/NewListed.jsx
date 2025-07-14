import "../demat_ongoing.css"
import IpoCard from "./IpoCard"
import data from "../data"
import { useRef } from "react";

export default function NewListed() {
    const containerScroll = useRef(null);
    let cards = 0;

    const ipoData = data.map((item) => {
        if (item.status === "newListed") {
            cards++;
            return <IpoCard key={item.id} {...item} />
        }
    })

    return <>
        <div className="new-listed-ipo-list">
            {cards>2 && <div className="previous" onClick={() => {
                containerScroll.current.scrollBy({ left: -572, behavior: "smooth" })
            }}>
                <svg width="27" height="46" viewBox="0 0 27 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 43L3 23L24 3" stroke="#0078FF" strokeOpacity="0.49" strokeWidth="3" strokeLinecap="square" />
                </svg>
            </div>}
            <section id="newListedIpo">
                <div className="newListedIpo-text">
                    <div className="text-title">New Listed</div>
                    <div className="description">
                        Companies where the IPO investment process is started and will be listed soon in the stock market for regular trading.
                    </div>
                </div>
                <button className="view-all">View All</button>
            </section>
            <section className="card-container" ref={containerScroll}>
                {ipoData}
            </section>
            {cards>2 && <div className="next" onClick={() => {
                containerScroll.current.scrollBy({ left: 572, behavior: "smooth" })
            }}>
                <svg width="27" height="51" viewBox="0 0 27 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L24 25.5L3 48" stroke="#0078FF" strokeWidth="3" strokeLinecap="square" className="next" />
                </svg>
            </div>}
        </div>
    </>
}