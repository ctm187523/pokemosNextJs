import pokeAPi from '../api/pokeApi';
import { Pokemon } from '../interfaces/pokemon-full';


//funcion para manejar en la funcion getStaticProps de los archivos pages/pokemon/[id].tsx y
//pages/name/[name].tsx la peticion del pokemos seleccionado ya que en abos archivos es el mismo codigo
export const getPokemonInfo = async (nameOrId: string) => {

    //hemos modificado el codigo original añadiendo un try catch para poder manejar
    // el Incremental Static Regeneration(ISR) ver metodo getStaticProps de pages/pokemon/[id].tsx
    try {

        //usamos pokeApi de api/pokeApi para la request y usamos la interfaz Pokemon creada en interfaces/pokemon-full para tipar la respuesta
        //desestructuramos la data que sera la informacion del Pokemon, en la request usamos el id o el name dependiendo desde donde ha sido llamado 
        //para recibir la informacion del pokemon seleccionado
        const { data } = await pokeAPi.get<Pokemon>(`/pokemon/${nameOrId}`);

        //creamos el siguiente codigo para solo mandar lo que necesitamos y no usar toda la informacion que recibimos ya que no la usamos toda
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }

    } catch (error) {
        return null; //en caso de no encontrar el pokemon manda un null
    }

}