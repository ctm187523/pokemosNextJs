import { Card, Grid } from '@nextui-org/react';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemons: FC<Props> = ({ pokemonId }) => {

    //usamos el useRouter de Next
    const router = useRouter();

    //esta funcion lleva al pokemon clickado de la lista de favoritos
    //usamos el router importado arriba de next
    const onFavoriteClicked = () => {
        router.push(`/pokemon/${ pokemonId }`)
    }

    return (
        // usamos la funcion creada arriba onFavoriteClicked para navegar al pokemon de favoritos clickado
        <Grid xs={6} sm={3} md={2} xl={1} key={ pokemonId } onClick={ onFavoriteClicked }>
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
