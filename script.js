let loadedPokemons;

function startLoader() {
    document.getElementById('loader').className = 'loader';
}


function quitLoader() {
    document.getElementById('loader').className = 'd-none';
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function init() {
    getPokemons();
    quitLoader()
}


async function searchPokemon() {
    let search = document.getElementById('input-search').value
    let url = `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`;
    let response = await fetch(url);
    let responseAsJSON = await response.json()
    console.log(responseAsJSON)
    let i = responseAsJSON.id
    allPokemonInfo[i] = setPokeInfo(responseAsJSON)
    await getGermanName(i)
    openInfoCard(i)
    document.getElementById('input-search').value = ``
}


function isError(obj) {
    return Object.prototype.toString.call(obj) === "[object Error]";
}


//max Pokemons = 898
async function getPokemons() {
    document.getElementById('poke-card-holder').innerHTML = '';
    for (let i = 1; i < 41; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJSON = await response.json()
        console.log(responseAsJSON)
        allPokemonInfo[i] = setPokeInfo(responseAsJSON)
        await getGermanName(i)
        setPokeCard(i)
        loadedPokemons = i
    }
}

async function getGermanName(i) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${i}/`
    let response = await fetch(url);
    let responseAsJSON = await response.json()
    pushGermanNametoArray([responseAsJSON, i])
}


async function getMorePokemons() {
    let i = loadedPokemons + 1
    startLoader()
    for (i; i < loadedPokemons + 11; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJSON = await response.json()
        console.log(responseAsJSON)
        allPokemonInfo[i] = setPokeInfo(responseAsJSON)
        await getGermanName(i)
        setPokeCard(i)
    }
    loadedPokemons = i - 1
    quitLoader()
}


async function spezifickPokemon(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJSON = await response.json()
    allPokemonInfo[i] = setPokeInfo(responseAsJSON)
    await getGermanName(i)
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
    setMovesToInfoCard(i)
    document.getElementById('poke-card-holder').classList.add('bg-blur')
    document.getElementById('search').className = 'd-none'
    document.querySelector('body').style = 'overflow: hidden;'
    document.querySelector('footer').className = `d-none`
    setInfoPokeType(i)
    setAbilities(i)

}


function closeInfoCard() {
    document.getElementById('info-card-holder').className = 'd-none'
    document.getElementById('poke-card-holder').className = 'poke-card-holder'
    document.getElementById('search').className = 'search'
    document.querySelector('body').style = 'overflow: auto;'
    document.querySelector('footer').className = `footer`
}


async function lastPokemon(i) {
    i = i - 1
    if (i == 0) {
        i = 898
        if (allPokemonInfo[i] == undefined) {
            startLoader()
            await spezifickPokemon(i)
            openInfoCard(i)
            quitLoader()
        } else {
            openInfoCard(i)
        }
    } else {
        if (allPokemonInfo[i] == undefined) {
            startLoader()
            await spezifickPokemon(i)
            openInfoCard(i)
            quitLoader()
        } else {
            openInfoCard(i)
        }
    }
}


async function nextPokemon(i) {
    if (i == loadedPokemons) {
        await getMorePokemons()
        i = i + 1
        openInfoCard(i)
    } else {
        if (i == 898) {
            i = 1
            openInfoCard(i)
        } else {
            i = i + 1
            openInfoCard(i)
        }
    }
}


function setInfoPokeType(j) {
    for (let i = 0; i < allPokemonInfo[j].types.length; i++) {
        let type = capitalizeFirstLetter(allPokemonInfo[j].types[i])
        let color = allPokemonInfo[j].types[i]

        document.getElementById('info-badge-holder').innerHTML += setPokeTypeHTML([type, color]);
    }

}

function setMovesToInfoCard(i) {
    document.getElementById('pills-contact').innerHTML = ``
    allPokemonInfo[i].moves.forEach(move => {
        document.getElementById('pills-contact').innerHTML += setMovesToInfoCardHTML(move)
    })
}

function setAbilities(i) {
    document.getElementById('s-info').innerHTML = ``
    allPokemonInfo[i].abilities.forEach(abilitie => {
        let j = abilitie.ability.name
        document.getElementById('s-info').innerHTML += setAbilitiesHTML(j)
    })
    document.getElementById('s-info').innerHTML += `<span class="s-info-name">Fähigkeiten</span>`
}