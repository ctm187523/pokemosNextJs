import Head from "next/head";
import { FC, ReactElement } from "react";
import { Navbar } from "../ui";


//intreface para el tipado de las Props
interface Props {
    title?: string, //opcional
    children: ReactElement | ReactElement[]
}

//usamos la siguiente instruccion para ver desde donde tenemos el host usando window.location.origin
//ponemos la condicion typeof window  === 'undefined' para si se ejecuta en el lado de backend muestre
//una informacion vacia '' si es el frontend nos dira el origen con window.location.origin si estamos en 
//localhost pondra http://localhost:3000/ si es en un servidor remoto la direccion que toque
//usamos esto para en la linea 36 usar una imagen que se encuentra en los archivos en public/img/banner.png
const origin = ( typeof window  === 'undefined') ? '' : window.location.origin

//recibimos de las props el children y el titulo opcional
export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                {/* si recibimos el titulo lo colocamos si no usamos por defecto el titulo PokemonApp */}
                <title>{title || 'PokemonApp'} </title>
                <meta name="author" content="CTM" />
                <meta name="description" content={`Informacion sobre el pokémon ${title}`} />
                {/* los keywords sirve para que palabras pondran los buscadores para encontrarla */}
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                {/* metatags extraidos de Open Gaph Meta Tags --> https://ahrefs.com/blog/open-graph-meta-tags/ 
                para el SEO ver video 73*/}
                <meta property="og:title" content={`Información sobre ${ title }`}/>
                <meta property="og:description" content= { `Esta es la pagina sobre ${ title }`}/>
                <meta property="og:image" content= {`${ origin }/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px',
            }}>
                {children}
            </main>
        </>
    )
}
