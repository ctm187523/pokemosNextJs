import axios from 'axios'; //importamos axios con yarn add axios

//inicializamos Axios para consultas API
const pokeAPi = axios.create({

    //en baseUrl colocamos la API de pokemons 
    baseURL: 'https://pokeapi.co/api/v2'
});

export default pokeAPi;