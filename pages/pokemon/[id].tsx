
import { Layout } from "../../components/layouts"
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import pokeAPi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces';
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";

//HEMOS CREADO UNA PAGINA CON UN ARGUMENTO DINAMICO [id]


//creamos una interfaz para las Props
interface Props {
  pokemon: Pokemon; //usamos la interfaz creada en interfaces/pokemon-full para tipar las props recibida de abajo en el metodo getStaticProps
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  return (
    <Layout title='Algun Pokemon'>

      {/* importamos Grid de NextUI */}
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        {/* creamos el responsive para el Grid con argumentos para diferentes pantallas
        el espacio total es 12 en xs topa todo el espacio para usar una imagen*/}
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
              alt={pokemon.name}
              width='100%'
              height={200}
            />
          </Card>
        </Grid>

        {/* usamos otro Grid de NextUI para mostrar la informacion del Pokemon seleccionado
        creamos el responive para las diferentes tamaños de pantalla en los atributos del Grid */}
        <Grid xs={12} sm={8}>
          <Card>
            {/* los boots de indexacion de las paginas se fijan en el header SEO*/}
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize"> {pokemon.name}</Text>

              <Button
                color="gradient"
                ghost //ghost se usa para que el boton solo se vea la linea exterior, el contorno del boton
              >
                Guardar en favoritos
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction='row' display='flex'>
                {/* mostramos las diferentes imagenes del pokemon seleccionado */}
                <Image 
                  src= { pokemon.sprites.front_default}
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
                  <Image 
                  src= { pokemon.sprites.back_default}
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
                  <Image 
                  src= { pokemon.sprites.front_shiny}
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
                  <Image 
                  src= { pokemon.sprites.back_shiny}
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />

              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
};




//manejamos las paginas con arugmento dinamico [id]
//podemos usar getStaticPaths si estamos de manera estatica prerenderizando las paginas que uasn rutas dinamicas [id]
//esto se genera en el buiold de la aplicacion
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  //creamos un arreglo de strings que va de uno a 151 y lo almacenamos en la constante pokemons151
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`); //debe ser string por eso usamos los ``


  return {
    //la cantidad de paths que tengamos es la cantidad de paginas que vamos a generar en build time
    //pasamos en el paths el array creado arriba pokemons151
    paths: pokemons151.map(id => ({
      //mandamos los params que es lo contenido en pokemosn151 cada uno de los id que tendran los diferentes pokemosn pasamos el id al arguemento dinamico de esta pagina [id].tsx
      params: { id: id }
    })),
    fallback: false //con fallback false decimos que si la peticion es un id que no existe muestre error 404
  }
}


//vamos a cargar el pokemon especifico seleccionado por el usuario de manera estática
//usamos el GetStaticProps de Next una vez carga arriba los paths con el metodo getStaticPaths
//generamos los props que tendra esta pagina, le pasamos los props esta pagina PokemonPage manejada como [id].tsx para generar paginas dinamicamente
//en el build todas las paginas han sido cargadas en el lado del servidor
export const getStaticProps: GetStaticProps = async (ctx) => {

  //leemos el ctx el contexto para recibir los parametros ctx.params donde obtenemos el id de la pagina del pokemon seleccionado
  //lo tipamos con as { id: string }
  const { id } = ctx.params as { id: string };

  //usamos pokeApi de api/pokeApi para la request y usamos la interfaz Pokemon creada en interfaces/pokemon-full para tipar la respuesta
  //desestructuramos la data que sera la informacion del Pokemon, en la request usamos el id para recibir la informacion del pokemon seleccionado
  const { data } = await pokeAPi.get<Pokemon>(`/pokemon/${id}`);



  return {
    //las props colocadas aqui se mandan a las props de este mismo componente
    //le pasamos a este componente el resultado de la consulta ya preprocesada
    //y con todos los campos completos
    props: {
      //devolvemos la data que es toda la informacion del pokemon recibida de la request
      pokemon: data
    }
  }
}

export default PokemonPage; //importante usamos la exportacion por defecto
