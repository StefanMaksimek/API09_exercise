let pokemon;
pokemon = 'charizard';


function init() {
    getPokemon(pokemon);
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


async function getPokemon(pokemon) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let responseAsJSON = await response.json()
    
    console.log(responseAsJSON)
    setPokeCard(responseAsJSON)

}


function setPokeCard(responseAsJSON) {
    let name = capitalizeFirstLetter(responseAsJSON['name'])
    let img = responseAsJSON['sprites']['front_default']
    document.getElementById('pokemon-card-holder').innerHTML = '';
    document.getElementById('pokemon-card-holder').innerHTML += setPokeCardHTML([name, img]);
    setStats(responseAsJSON)
}


function setStats(responseAsJSON) {
    let type = capitalizeFirstLetter(responseAsJSON['types'][0]['type']['name'])
    document.getElementById('stats').innerHTML += setStatsHTML(type)
}