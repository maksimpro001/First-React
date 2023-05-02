import Anime from "../../Anime/Anime.jsx"
import anime_db from "../../anime-db.js"
import "./Cards.css"
import {Link} from "react-router-dom"

function Cards() {
    return (
        <>
            {anime_db.map((card) => (
                <Link className="card" to={`/${card.name}`}>
                    <img src={card.img} alt="" className="card__img"/>
                    <span className="card__name" >{card.name}</span>
                </Link>
            ))}
        </>
    )
}

export default Cards