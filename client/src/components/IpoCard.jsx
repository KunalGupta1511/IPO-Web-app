import { useEffect, useState } from "react";
import "../ipoCard.css"

export default function IpoCard(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const labels = Object.keys(props.ipoDetails).map((item) => {
        return item.replace(/([A-Z])/g, " $1").toUpperCase();
    })

    useEffect(() => {
        function setWidth() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", setWidth);

        return function () {
            window.removeEventListener("resize", setWidth);
        }
    }, [])

    function fetchIpoDetails(index) {
        const property = Object.keys(props.ipoDetails)[index]

        return props.ipoDetails[property];
    }

    return <>
        {windowWidth > 768 && <div className="card">
            <div className="title-container">
                <img src={props.ipoLogo} alt="Company logo" />
                <div className="title">{props.ipoTitle}</div>
            </div>
            <div className={`ipo-details ${props.status === "newListed" ? "new" : ""}`}>
                <table className="table-1">
                    <thead>
                        <tr>
                            <th>{labels[0]}</th>
                            <th>{labels[1]}</th>
                            <th>{labels[2]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{fetchIpoDetails(0)}</td>
                            <td>{fetchIpoDetails(1)}</td>
                            <td>{fetchIpoDetails(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-2">
                    <thead>
                        <tr>
                            <th>{labels[3]}</th>
                            <th>{labels[4]}</th>
                            <th>{labels[5]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{fetchIpoDetails(3)}</td>
                            <td>{fetchIpoDetails(4)}</td>
                            <td>{fetchIpoDetails(5)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="buttons">
                <button id="Rhp">RHP</button>
                <button id="Drhp">DRHP</button>
            </div>
        </div>}
        {windowWidth <= 768 && <div className="ipo-card">
            <img src={props.ipoLogo} alt="Company Logo" className="ipo-logo" />
            <h2 className="ipo-title">{props.ipoTitle}</h2>
            <div className="ipo-details-mobile">
                <div class="row">
                    <div class="col">
                        <p class="label">PRICE BAND</p>
                        <p class="value">Rs 39 – 41</p>
                    </div>
                    <div class="col">
                        <p class="label">OPEN</p>
                        <p class="value">2024-01-22</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="label">ISSUE SIZE</p>
                        <p class="value">143.81 Cr.</p>
                    </div>
                    <div class="col">
                        <p class="label">ISSUE TYPE</p>
                        <p class="value">Book Built</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="label">CLOSE</p>
                        <p class="value">2024-01-24</p>
                    </div>
                    <div class="col">
                        <p class="label">LISTING DATE</p>
                        <p class="value">2024-01-30</p>
                    </div>
                </div>
            </div >
            <div className="buttons-mobile">
                <button className="active">DRHP</button>
                <button>RHP</button>
            </div>
        </div>}
    </>
}