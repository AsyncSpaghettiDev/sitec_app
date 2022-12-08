import classNames from './access.module.scss'
import './access.css'
import { useNavigate } from 'react-router-dom'

export const Access = () => {
    return (
        <main className={`main md:p-4 md:grid md:gap-x-4 md:gap-y-8 shadow-md shadow-neutral-400 text-sm flex flex-col p-4 relative box-border gap-3 bg-slate-100 rounded`}>
            <article id='welcome'>
                <h1 className="font-medium mb-1 text-2xl">Bienvenidos a SITEC</h1>
                <p className="m-0 text-justify">Para acceder, usa el Número de Control con la clave correspondiente. Una vez que hayas
                    entrado, presiona en el menú superior "Reinscripción" para que inicies el procedimiento. Recuerda que
                    podrás
                    ingresar para reinscribirte a partir de la hora y fecha asignada, hasta antes del día de cierre de
                    reinscripciones.</p>
            </article>
            <article className='md:mt-4' id='important'>
                <h3 className="text-2xl font-medium mb-1">¡AVISO IMPORTANTE!</h3>
                <p className="m-0 text-justify">Para conocer el día y la hora en que deberás ingresar, por favor da clic en el
                    <a
                        className='no-underline text-red-700 font-medium'
                        href="https://docs.google.com/spreadsheets/d/1tROsL2KaTrwgt3QjzKdjLuPoPoo1b091/edit?pli=1#gid=901025376"
                        target="_blank"> ORDEN DE ACCESO PARA ALUMNOS.</a>
                </p>
            </article>

            <LoginForm />

            <article id='support'>
                <h3 className="text-2xl font-medium important">
                    <a className='no-underline text-red-700' href="https://www.facebook.com/Soporte-Técnico-SITEC-Tijuana-165425640900735/">CLIC PARA SOPORTE
                        SITEC</a>
                </h3>
                <p className="m-0 text-justify">En caso de tener algún problema durante el proceso, puedes documentarlo presionando PRINTSCR
                    en tu teclado (Windows) y pegarlo o insertar la imagen generada con CMD+SHIFT+3 (OSX) en un documento de
                    texto con tus comentarios y número de control. Para resolver cualquier inquietud si eres maestro pide
                    ayuda
                    al Jefe de Docencia y si eres alumno pide ayuda con el <a
                        href="https://profesionales2.wixsite.com/deptijuana/coordinaciones">coordinador</a> de tu carrera.
                </p>
                <p className="m-0 text-justify">Gracias.</p>
            </article>

        </main>
    )
}

const LoginForm = () => {
    const navigate = useNavigate()
    return (
        <form className={`${classNames.form} md:mt-4 md:p-2 m-auto p-4 rounded-md`} id='form'>
            <div className={`${classNames.form_input} ${classNames.form_keys}`}>
                <label className={`${classNames.label} ${classNames.incorrect}`} htmlFor="noControl">Por favor escribe el Número de Control.</label>
                <input id="noControl" placeholder="Número de Control" type="text" />
            </div>

            <div className={`${classNames.form_input} ${classNames.form_keys}`}>
                <label className={`${classNames.label} ${classNames.incorrect}`} htmlFor="claveUser">Por favor escribe la clave.</label>
                <input id="claveUser" placeholder="Clave" type="password" />
            </div>

            <div className={`${classNames.form_input}`}>
                <a className='text-blue-800' href="#">Recuperar Clave</a>
            </div>

            <div className={`${classNames.form_input}`}>
                <img src="/assets/images/recaptcha.png" alt="Recaptcha validation" width={'30px'} />
            </div>

            <input onClick={() => navigate('/panel')} className="submitBtn" type="submit" value="Entrar" />
        </form>
    )
}