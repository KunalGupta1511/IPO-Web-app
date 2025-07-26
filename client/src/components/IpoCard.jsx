import { useEffect, useState } from "react";
import "../css/ipoCard.css"

export default function IpoCard(props) {
    const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
    const labels = Object.keys(props.ipoDetails).map((item) => {
        return item.replace(/([A-Z])/g, " $1").toUpperCase();
    })

    useEffect(() => {
        function setWidth() {
            setWindowWidth(document.documentElement.clientWidth);
        }
        setWidth();
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
                <div className="row">
                    <div className="col">
                        <p className="label">{labels[0]}</p>
                        <p className="value">{fetchIpoDetails(0)}</p>
                    </div>
                    <div className="col">
                        <p className="label">{labels[1]}</p>
                        <p className="value">{fetchIpoDetails(1)}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="label">{labels[2]}</p>
                        <p className="value">{fetchIpoDetails(2)}</p>
                    </div>
                    <div className="col">
                        <p className="label">{labels[3]}</p>
                        <p className="value">{fetchIpoDetails(3)}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="label">{labels[4]}</p>
                        <p className="value">{fetchIpoDetails(4)}</p>
                    </div>
                    <div className="col">
                        <p className="label">{labels[5]}</p>
                        <p className="value">{fetchIpoDetails(5)}</p>
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