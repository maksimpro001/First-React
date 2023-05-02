import "./Anime.css"

function Anime({anime}) {
    return (
        <>
            <div className="Anime">
                <div className="Anime__player">
                    <h2 className="Anime__player-title">{anime.name}</h2>
                    <iframe className="Anime__player-video" src={anime.video} title={anime.name} frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="wraper-anime">
                    <div className="Anime__details">
                        <img src={anime.img} alt="" className="Anime__details-img" />
                        <div className="Anime__details-text">
                            <span className="Anime__details-text-desc">Type :<br /><span className="Anime__details-text-desc--text">{anime.type}</span></span>
                            <span className="Anime__details-text-desc">Status :<br /><span className="Anime__details-text-desc--text">{anime.status}</span></span>
                            <span className="Anime__details-text-desc">Studio :<br /><span className="Anime__details-text-desc--text">{anime.studio}</span></span>
                            <span className="Anime__details-text-desc">Duration :<br /><span className="Anime__details-text-desc--text">{anime.duration}</span></span>
                            <span className="Anime__details-text-desc">Genres :<br /><span className="Anime__details-text-desc--text">{anime.genres}</span></span>
                        </div>
                    </div>
                    <div className="Anime__description">
                        <h2 className="Anime__description-title">Sypnosis :</h2>
                        <p className="Anime__description-text">{anime.description}</p>
                    </div>
                </div>
                
            </div>
        </>
    )

}

export default Anime