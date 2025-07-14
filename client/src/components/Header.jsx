export default function Header() {
    return <>
        <header>
            <div className="heading">IPO</div>
            <div className="description">Following is the list of companies for IPO as of today.</div>
        </header>
        <section id="upcomingIpo">
            <div className="upcomingIpo-text">
                <div className="text-title">Upcoming</div>
                <div className="description">
                    Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later on.
                </div>
            </div>
            <button className="view-all">View All</button>
        </section>
    </>
}