import "../ipoCard.css"

export default function IpoCard(props) {
    const labels = Object.keys(props.ipoDetails).map((item) => {
        return item.replace(/([A-Z])/g, " $1").toUpperCase();
    })

    return <>
        <div className="card">
            <div className="title-container">
                <img src={props.ipoLogo} alt="Company logo" />
                <div className="title">{props.ipoTitle}</div>
            </div>
            <div className="ipo-details">
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
                            <td>{props.ipoDetails.priceBand}</td>
                            <td>{props.ipoDetails.open}</td>
                            <td>{props.ipoDetails.close}</td>
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
                            <td>{props.ipoDetails.issueSize}</td>
                            <td>{props.ipoDetails.issueType}</td>
                            <td>{props.ipoDetails.listingDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="buttons">
                <button id="Rhp">RHP</button>
                <button id="Drhp">DRHP</button>
            </div>
        </div>

    </>
}