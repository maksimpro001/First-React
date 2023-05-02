import "./Home.css"
import Cards from "./Cards/Cards.jsx"

function Home() {
    return (
        <>
            <div className="wraper">
                <div className="explore">
                    <h2 className="explore__title">Explore</h2>
                    <p className="explore__undertitle">What are you gonna watch today ?</p>
                    <div className="explore__carousel">
                        <h2 className="explore__carousel-title">Weather With You</h2>
                        <p className="explore__carousel-lead">Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.</p>
                    </div>
                </div>
                <div className="realease">
                    <h2 className="realease__title">New Realease</h2>
                    <div className="realease__cards">
                        <Cards/>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Home