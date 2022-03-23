const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_shiny;
            let pokeName = data.name;
            let poketype = data.types[0].type.name;
            let pokestat = data.stats;
            let pokemove = data.moves;
            pokeImage(pokeImg);
            pokeNames(pokeName);
            poketypes(poketype);
            pokestats(pokestat);
            pokemoves(pokemove);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeNames = (nombre) => {
    const NombrePokemon = document.getElementById("Nombre");
    NombrePokemon.innerHTML=("Nombre: "+nombre);
}
const poketypes = (Tipo) => {
    const TipoPokemon = document.getElementById("Tipo");
    TipoPokemon.innerHTML=("Tipo de pokemón: "+ Tipo);
}
const pokestats = (estats) => {
    const EstadisticasPokemon = document.getElementById("Estats");
    let estat='';
    for (numeroFor=0 ; numeroFor < estats.length; numeroFor = numeroFor + 1) {
        estat=estat+(`${estats[numeroFor].stat.name}: ${estats[numeroFor].base_stat} <br/>`);
      }
    //console.log(estat);
    EstadisticasPokemon.innerHTML=("Estadísticas: <br/>"+estat);
}
const pokemoves = (movimiento) => {
    const MovimientosPokemon = document.getElementById("Movimientos");
    let mov='';
    for (numeroFor=0 ; numeroFor < movimiento.length; numeroFor = numeroFor + 1) {
        mov=mov+(`${movimiento[numeroFor].move.name}<br/>`);
      }
    console.log(mov);
    MovimientosPokemon.innerHTML=("Movimientos: <br/>"+mov);
}