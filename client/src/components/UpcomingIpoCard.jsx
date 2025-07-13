import "../ipoCard.css"

export default function UpcomingIpoCard() {
    return <>
        <section className="card-container">
            <div className="card">
                <div className="title-container">
                    <img src="./src/assets/Image1.png" alt="" />
                    <div className="title">Nova Agritech Ltd.</div>
                </div>
                <div className="ipo-details">
                    <table id="table-1">
                        <thead>
                            <tr>
                                <th>PRICE BRAND</th>
                                <th>OPEN</th>
                                <th>CLOSE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rs 39-41</td>
                                <td>2024-01-22</td>
                                <td>2024-01-24</td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="table-2">
                        <thead>
                            <tr>
                                <th>ISSUE SIZE</th>
                                <th>ISSUE TYPE</th>
                                <th>LISTING DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>143.81 Cr.</td>
                                <td>Book Built</td>
                                <td>2024-01-30</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttons">
                        <button id="Rhp">RHP</button>
                        <button id="Drhp">DRHP</button>
                    </div>
                </div>
            </div>
        </section>
    </>
}