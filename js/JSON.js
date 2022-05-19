let allPokemonInfo = []
let currentPokemonInfo = []

function setPokeInfo(responseAsJSON) {
    let id = responseAsJSON.id
    let img = findIMG(responseAsJSON)
    let height = responseAsJSON.height * 10 +' cm'
    height = height.replace('.', ',')
    let weight = responseAsJSON.weight / 10 + ' kg'
    weight = weight.replace('.', ',')
    let stats = getStats(responseAsJSON.stats)
    let moves = getMoves(responseAsJSON.moves)
    let types = getTypes(responseAsJSON.types)
    let exp = responseAsJSON.base_experience
    let abilities = responseAsJSON.abilities 

    return {id, img, height, weight, stats, moves, types, exp, abilities}
}


function findIMG(responseAsJSON) {
    if (responseAsJSON.sprites.other.dream_world.front_default == null) {
        return responseAsJSON.sprites.other.home.front_default
    } else {
        return responseAsJSON.sprites.other.dream_world.front_default
    }
}


function pushGermanNametoArray([responseAsJSON, i]) {
    allPokemonInfo[i].name = responseAsJSON.names[5].name
}


function getStats(stats) {
    let hp = stats[0].base_stat
    let attack = stats[1].base_stat
    let defense = stats[2].base_stat
    let specialAttack = stats[3].base_stat
    let specialDefense = stats[4].base_stat
    let speed = stats[5].base_stat

    return {hp, attack, defense, specialAttack, specialDefense, speed}
}


function getMoves(moves) {
    let movesArray =[]
    for(let i = 0; i < moves.length; i++) {
        movesArray.push(moves[i].move.name)
    }
    return movesArray
}


function getTypes(types) {
    let typesArray =[]
    for(let i = 0; i < types.length; i++) {
        typesArray.push(types[i].type.name)
    }
    return typesArray
}

