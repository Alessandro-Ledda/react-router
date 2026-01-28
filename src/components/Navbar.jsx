import { Link, NavLink } from "react-router-dom";

function Navbar() {

    // creazione variabile per la gestione dei componenti del nav
    const links = [
        { path: '/', label: 'HomePage' },
        { path: '/chisiamo', label: 'Chi siamo' },
        { path: '/prodotti', label: 'Prodotti' }
    ]

    return (
        <nav className="nav">
            <ul>
                {links.map((link, i) => (
                    <li key={i}>
                        <NavLink to={link.path}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar