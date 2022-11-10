import classNames from './header.module.scss'

export const Header = () => {
    return (
        <header className={classNames.header}>
            <img className={classNames.header_logo} id={classNames.logoTNM} src="./assets/images/LogoTNM.png"
                alt="Logo Tecnológico Nacional de México con Transparencia" />
            <img className={classNames.header_logo} id={classNames.logoTNMH} src="./assets/images/LogoTecNM_Horizontal.svg"
                alt="Logo Tecnológico Nacional de México" />
            <img className={classNames.header_logo} id={classNames.logoITT} src="./assets/images/logo_ITT1.png"
                alt="Logo Tecnológico Nacional de México Cámpus Instituto Tecnológico Tijuana" />
        </header>
    )
}