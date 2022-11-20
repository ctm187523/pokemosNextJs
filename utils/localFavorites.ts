
const toggleFavorite = (id: number) => {

    console.log('toggelFavorite Llamado');

    //creamos el toggle si el id existe lo borramos si no lo agregamos al local storage
    //almacenamos en un array con let ya que puede cambiar su contenido con los id almacenados
    //en el local storage, en el caso de que no haya nada en localstorage devuelve un arreglo de string vacio
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    //ponemos la condicion de que si el id existe lo ignoramos, en caso contrario lo almacenamos
    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId != id);
    } else {
        favorites.push(id);
    }

    //volvemos almacenar en el local storage los cambios efectuados
    //usamos JSON.parse  para poder almacenarlo como su representacion en String
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

//funcion para saber si hay un pokemon concreto en el localstorage
//como argumento tiene un number y devuleve un valor booleano si exite true en caso contrario false
const existInFavorites = ( id: number): boolean => {

    //ponemos una condicion para evitar el error que si esta ejecutando del lado del servidor sea false
    //si no lo ejecuta el servidor y da error ya que el servidor no puede acceder(ver video 64 minuto 6)
    if ( typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes( id );

}

//creamos una funcion que devuelve los pokemons que hay en el localStorage, no recibe argumentos y devuelve un array de numeros
const pokemons = (): number[] => {

    //aqui no hacemos la verificacion del typeof window  de la linea 29 por si corre en el lado del servidor y no de error
    //lo haremos usando un useEffect para ver como hacerlo de diferentes maneras se usa en favorites/index
    return JSON.parse( localStorage.getItem('favorites') || '[]');
}

export default {
    //exportamos la funciones por defecto
    existInFavorites,
    pokemons,
    toggleFavorite,
}