import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context'
import classNames from './navbar.module.scss'
import responsive from './student.module.scss'

export const Navbar = () => {
    const { isLoggedIn } = useContext(Context)

    return !isLoggedIn ? <NavbarDefault /> : <NavbarLogged />
}

const NavbarDefault = () => {
    return (
        <nav className={classNames.nav}>
            <Link className={classNames.nav_a} to="/">Inicio</Link>
            <Link className={classNames.nav_a} to="/acceso">Acceso</Link>
        </nav>
    )
}

const NavbarLogged = () => {
    return (
        <nav className={responsive.nav}>
            <label className={responsive.trigger_btn} htmlFor={responsive.menu_trigger}>
                <img src="/assets/images/lista.png" alt="button triggerer" />
            </label>
            <input hidden type="checkbox" id={responsive.menu_trigger} />
            <ul className={responsive.nav_list}>
                <li className={responsive.nav_item}><Link className={responsive.nav_a} to="panel">Mi Panel</Link></li>
                <li className={responsive.nav_item}><Link className={responsive.nav_a} id="changePassword" to="#">Cambiar Clave</Link></li>
                <li className={responsive.nav_item}><Link className={responsive.nav_a} id="changeEmail" to="#">Cambiar Email</Link></li>
                <li className={responsive.nav_item}><Link className={responsive.nav_a} to="reinscripcion">Reinscripción</Link></li>
                <li className={responsive.nav_item}><Link className={responsive.nav_a} to="avance_ciclo">Avance Ciclo</Link></li>
                <li className={responsive.nav_item}><Link className={responsive.nav_a} to="kardex">Kardex</Link></li>
                <li className={responsive.nav_item}><Link className={responsive.nav_a} to="log">Log</Link></li>
                <li className={responsive.nav_item}><Link className={responsive.nav_a} to="/">Salir Sistema</Link></li>
            </ul>
        </nav >
    )
}