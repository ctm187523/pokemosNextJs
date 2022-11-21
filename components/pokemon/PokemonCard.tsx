import { SmallPokemon } from '../../interfaces/pokemon-list';
import { FC } from 'react';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

//creamos una interfaz para las Props
interface Props {
    pokemon: SmallPokemon //el pokemon es de tipo SmallPokemon creado en interfaces/pokemon-list
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    // usamos el useRouter de next para usar sus propiedades y extraer informacion 
    const router = useRouter();

    //metodo que usamos al ser pulsado una tarjeta(Card)
    const onClick = () => {
        //navegamos a la ruta pokemon/id del pokemon pulsado
        router.push(`/name/${ pokemon.name }`);
    }


    return (
        //usamos Grid de NextUI,como booststrap por defecto es de 12 posiciones el ancho de la pantalla
        //para pantallas muy pequeñas decimos que cada tarjeta(Card) usado abajo ocupe 6 posiciones -> xs= { 6 } y asi con los demas tipos de pantalla
        //con pantallas muy grandes xl le decimos xl ={ 1 } que una tarjeta ocupe una posicion con lo que 
        //tendriamos 12 tarjetas en todo el ancho de la pantalla con xs={ 6 } solo tendiramos 2 tarjetas en el ancho de la pantalla
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            {/* importamos Card y decimos que sera hoverable el mouse podra pasar por ella y clickable podra ser clickada 
            usamos el metodo onClick creado arriba*/}
            <Card 
                hoverable 
                clickable
                onClick={ onClick }
                >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={pokemon.img}
                        width="100%"
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform="capitalize">{pokemon.name} </Text>
                        <Text>#{pokemon.id} </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
};
