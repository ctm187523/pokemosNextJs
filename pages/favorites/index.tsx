

import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts'
import {  FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui'

import { localFavorites } from '../../utils';

const FavoritesPage = () => {

    //usamos un useState para controlar el estado del listado de pokemons que hay en favoritos
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    //usamos un useEffect para que al cargar la pagina se carguen el listado de pokemons de favoritos
    //ademas como esto se ejecuta del lado del cliente no tenemos que usar el typeof window ver linea 40 de utils/localFavorites
    useEffect(() => {
        //usamos la funcion de utils/localFavorites
        setFavoritePokemons(localFavorites.pokemons);
    }, []);

    return (
        <Layout title="Pokémons - Favoritos">

            {/* ponemos una condicion si no hay pokemosn en favoritos muestre el componente NoFavorites de components/ui
            en caso contrario muestra el listado de pokemons de favoritos*/}
            {
                favoritePokemons.length === 0
                  ? ( <NoFavorites /> )
                  : (
                       //usamos el componente components/pokemon/FavoritePokemons
                    <FavoritePokemons pokemons={ favoritePokemons } />
                    
                  )
            }
            
          
           
        </Layout>
    )
}

export default FavoritesPage
