import "./Nav.css"
import {Link} from "react-router-dom"

function Nav() {

    return (
        <>
            <nav className="nav">
                <Link className="logo" to="/">Anonime</Link>
                <input className="search" type="text" placeholder="Search anime or movie"/>
            </nav>
        </>
    )
}

export default Nav