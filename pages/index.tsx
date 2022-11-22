import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next'
import { pokeAPi } from '../api';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon';


//interface para tipar las props
interface Props {
  pokemons: SmallPokemon[]; //importamos la interfaz SmallPokemon de interfaces/pokemon-list
}

//tipamos las props con la interfaz creada arriba Props
//en Lugar de NextPage podriamos usar como hemos echo en otros componentes FC -funcional component
const HomePage: NextPage<Props> = ({ pokemons }) => {


  return (
    <Layout title="Listado de Pokemons">

      {/* usamos Grid Container de NextUI y usamos las propiedades gap 2 para indicar la distancia
      entre las imagenes y el justify flex-start*/}
      <Grid.Container gap={2} justify='flex-start'>
        {
          //recorremos el listado de pokemons de las props recibidas arribas y creadas abajo en getStaticProps
          pokemons.map((pokemon) => (
            //importamos el componente creado por nosotros PokemonCard components/pokemon
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
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
//en desarrollo se carga cada vez que se ejecuta pero en produccion solo se carga una sola vez
export const getStaticProps: GetStaticProps = async (ctx) => {

  //le ponemos como parametro limit=151  para limitar el numero de pokemos a visualizar
  //usamos el archivo pokeApi donde hemos importado axios y colocado la baseUrl
  //desestructuramos la respuesta a la url con la data
  //usamos la interfaz de interfaces/pokemon-list para tipar el get, la respuesta de la API
  const { data } = await pokeAPi.get<PokemonListResponse>('/pokemon?limit=151');

  //creamos una constante donde añadiremos a la interfaz SmallPokemon los campos faltantes por completar
  //el name y el url lo obtenemos directamente de los results en la consulta de la Api el id lo obtenemos
  //al recorrer cada uno de los resultadas en data.results.map obtenemos el indice poniendo i en los argumentos del callback del map
  //la img la obtenemos de la url de pokemons  https://pokeapi.co/api/v2/pokemon/ditto ver en postman
  //sprites-dream_world la imagen la cambiamos cambiendo el id del pokemon + 1
  //antes en el map hemos esparcido los demas campos de cada uno de los pokemons con los 3 puntos ...
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke, //esparcimos todas las propiedades de los results ahora en la variable poke
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))


  return {
    //las props colocadas aqui se mandan a las props de este mismo componente
    //le pasamos a este componente el resultado de la consulta ya preprocesada
    //y con todos los campos completos
    props: {
      pokemons: pokemons
    }
  }
}


export default HomePage
