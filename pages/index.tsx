import { Button } from '@nextui-org/react';
import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next'

const HomePage: NextPage = ( props ) => {

  
  console.log(props);
  return (
    <Layout title="Listado de Pokemons">
      
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </Layout>
  )
}

//esta funcion le dice a Next que en tiempo de build llame a esta funcion, sacado el codigo de
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
//pero hemos usado el snippet nextgetStaticProps
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
//la informacion se procesa en el servidor antes de que el usuario lo demande
//se ejecuta del lado del servidor, solo funciona en las pages
//se usa si sabemos de antemano lo que la pagina necesita, en este caso cargar los 150 pokemons 
//al cargar la pagina ya vienen cargados los 150 pokemons, se cargaron a la hora de construir la aplicacion
//getStaticProps solo se ejecuta del lado del servidor  y solo se ejecuta en el build time
export const getStaticProps: GetStaticProps = async (ctx) => {
 
  return {
    //las props colocadas aqui se mandan a las props de este mismo componente
    props: {
      
    }
  }
}


export default HomePage
