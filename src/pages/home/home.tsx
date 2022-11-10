export const Home = () => {
    return (
        <main className="main">
            <h1 className="title font-medium text-3xl my-4">Bienvenidos a SITEC</h1>
            <p className='text-sm text-justify my-2'>El siguiente video muestra de una manera simple como es el proceso de reinscripción para los alumnos. Una vez
                que hayas visto el video tutorial da clic en la pestaña de ACCESO para ingresar al sistema con tu número de
                control y clave. Es probable que el sistema pida cambiar la clave y actualizar el correo electrónico.</p>
            <div className='flex justify-center'>
                <iframe
                    className='aspect-video max-w-xl w-full px-4 mx-2'
                    src="https://www.youtube.com/embed/-XOJ9tQHpsY" />
            </div>
        </main>
    )
}