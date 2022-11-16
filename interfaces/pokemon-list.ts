
//tipamos la respuesta a la Api Pokemon en pages/index.tsx 
//usamos la web --> https://www.quicktype.io
//para ayudarnos a tipar copiamos el codigo obtenido en postman con la
// url --> https://pokeapi.co/api/v2/pokemon?limit=151 y la usamos en la web mencionada
// vewr video 47

export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id: number;
    img: string;
}
