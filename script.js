let loadedPokemons;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function init() {
    getPokemons();
}



function searchPokemon() {
    let input = document.getElementById('input-search').value
    pokemon = input.toLowerCase()
    getPokemons()

}


//max Pokemons = 898
async function getPokemons() {
    document.getElementById('poke-card-holder').innerHTML = '';
    for (let i = 1; i < 21; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJSON = await response.json()
        console.log(responseAsJSON)
        allPokemonInfo[i] = setPokeInfo(responseAsJSON)
        setPokeCard(i)
        loadedPokemons = i
    }
}


async function getMorePokemons() {
    let i = loadedPokemons +1
    for (i ; i < loadedPokemons + 21; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJSON = await response.json()
        console.log(responseAsJSON)
        allPokemonInfo[i] = setPokeInfo(responseAsJSON)
        setPokeCard(i)
    }
    loadedPokemons = i - 1
}


function setPokeCard(i) {
    document.getElementById('poke-card-holder').innerHTML += setPokeCardHTML(i);
    setPokeType(i)
}


function setPokeType(j) {
    for (let i = 0; i < allPokemonInfo[j].types.length; i++) {
        let type = capitalizeFirstLetter(allPokemonInfo[j].types[i])
        let color = allPokemonInfo[j].types[i]

        document.getElementById('badge-holder' + allPokemonInfo[j].id).innerHTML += setPokeTypeHTML([type, color]);
    }
    
}


function openInfoCard(i) {
    document.getElementById('info-card-holder').className = 'info-card-holder'
    document.getElementById('info-card-holder').innerHTML = openInfoCardHTML(i)
    document.getElementById('poke-card-holder').classList.add('bg-blur')
    document.querySelector('body').style = 'overflow: hidden;'
    

}