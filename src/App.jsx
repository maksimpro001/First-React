import Anime from "./assets/Anime/Anime"
import "./assets/App.css"
import Home from "./assets/Home/Home"
import Nav from "./assets/Nav/Nav"
import { Routes, Route } from "react-router-dom"
import anime_db from "./assets/anime-db"

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {anime_db.map((data) => (
          <Route path={`/${data.name}`} element={<Anime anime={anime_db[data.id]}/>}/>
        ))}
      </Routes> 
    </>
  )
}

export default App
