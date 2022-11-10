import classNames from './navbar.module.scss'
import responsive from './student.module.scss'

export const Navbar = () => {
    return (
        <nav className={classNames.nav}>
            <a className={classNames.nav_a} href="/">Inicio</a>
            <a className={classNames.nav_a} href="/acceso.html">Acceso</a>
        </nav>
    )
}

export const NavbarStudent = () => {
    return (
        <nav className={responsive.nav}>
            <label className={responsive.trigger_btn} htmlFor={responsive.menu_trigger}>
                <img src="/assets/images/lista.png" alt="button triggerer" />
            </label>
            <input hidden type="checkbox" id={responsive.menu_trigger} />
            <ul className={responsive.nav_list}>
                <li className={responsive.nav_item}><a className={responsive.nav_a} href="panel.html">Mi Panel</a></li>
                <li className={responsive.nav_item}><a className={responsive.nav_a} id="changePassword" href="#">Cambiar Clave</a></li>
                <li className={responsive.nav_item}><a className={responsive.nav_a} id="changeEmail" href="#">Cambiar Email</a></li>
                <li className={responsive.nav_item}><a className={responsive.nav_a} href="reinscripcion.html">Reinscripción</a></li>
                <li className={responsive.nav_item}><a className={responsive.nav_a} href="avance-ciclo.html">Avance Ciclo</a></li>
                <li className={responsive.nav_item}><a className={responsive.nav_a} href="kardex.html">Kardex</a></li>
                <li className={responsive.nav_item}><a className={responsive.nav_a} href="log.html">Log</a></li>
                <li className={responsive.nav_item}><a className={responsive.nav_a} href="/">Salir Sistema</a></li>
            </ul>
        </nav >
    )
}