import "../demat.css"

export default function Demat() {
    return <>
        <section className="demat-account">
            <div className="demat-logo-container">
                <img src="./src/assets/dp.jpg" alt="Bluestock Logo" />
                <span className="demat-title">BLUESTOCK</span>
            </div>
            <span>Applying for this IPO?</span>
            <span className="demat-text">The way you compare & invest in only the best IPO, let us help you get started by comparing and selecting the best Demat account. Open your Demat account now to apply for your favourite IPO.
            </span>
            <button>Open a Demat Account</button>
        </section>
    </>
} 