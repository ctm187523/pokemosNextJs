import Head from "next/head";
import { FC, ReactElement } from "react";
import { Navbar } from "../ui";

//intreface para el tipado de las Props
interface Props {
    title?: string, //opcional
    children:  ReactElement | ReactElement[]
}

//recibimos de las props el children y el titulo opcional
export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                {/* si recibimos el titulo lo colocamos si no usamos por defecto el titulo PokemonApp */}
                <title>{ title  || 'PokemonApp' } </title>
                <meta name="author" content="CTM"/>
                <meta name="description" content={`Informacion sobre el pokémon ${ title }`}/>
                {/* los keywords sirve para que palabras pondran los buscadores para encontrarla */}
                <meta name="keywords" content={`${ title }, pokemon, pokedex`}/>
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px',
            }}>
                { children }
            </main>
        </>
    )
}
