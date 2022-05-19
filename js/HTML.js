function setPokeCardHTML(i) {
    let name = capitalizeFirstLetter(allPokemonInfo[i].name)
    let color = allPokemonInfo[i].types[0]
    return `
        <div class="card" style="width: 18rem; background-image: linear-gradient(var(--${color}-bg-color), rgb(255, 255, 255));" onclick="openInfoCard(${allPokemonInfo[i].id})">
            <div class="watermark">
                <img src="./img/watermark2.png" alt="">
            </div>

            <div class="id-holder">
                <div class="id">
                    <h5>${allPokemonInfo[i].id}</h5>
                </div>
            </div>

            <div class="card-title">
                <h3>${name}</h3>
            </div>

            <img src="${allPokemonInfo[i].img}"
                class="card-img-top" alt="...">

            <div class="badge-holder" id="badge-holder${allPokemonInfo[i].id}">

            </div>
        </div>
    `;
}


function setPokeTypeHTML([type, color]) {
    return `<span class="badge" style="background-color: var(--${color}-bg-color);">${type}</span>`
}


function setStatsHTML(type) {
    return `
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><b>Type:</b></li>
            <li class="list-group-item">${type}</li>
        </ul>
    `;
}

function openInfoCardHTML(i) {
    return ` 
    <div class="infobox">
            <div class="info-card" style="background-image: linear-gradient(var(--${allPokemonInfo[i].types[0]}-bg-color), rgb(255, 255, 255));">
                <div class="info-card-header">
                    <img src="./img/arrow-94-64.png" onclick="lastPokemon(${allPokemonInfo[i].id})">
                    <h4 onclick="closeInfoCard()">Pokedex</h4>
                    <img src="./img/arrow-3-64.png" onclick="nextPokemon(${allPokemonInfo[i].id})">
                </div>

                <div class="watermark">
                    <img src="./img/watermark2.png" alt="">
                </div>

                <img src=${allPokemonInfo[i].img}
                    class="card-img-top" alt="...">
            </div>

            <h2>${capitalizeFirstLetter(allPokemonInfo[i].name)} #${allPokemonInfo[i].id}</h2>

            <div class="badge-holder" id="info-badge-holder">
                
            </div>

            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">Info</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">Stats</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">Moves</button>
                </li>
            </ul>

            <div class="tab-content w-90" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="s-info-holder">
                        <div class="s-info">
                            <span class="s-info-value">${allPokemonInfo[i].weight}</span>
                            <span class="s-info-name">Gewicht</span>
                        </div>

                        <div class="s-info">
                            <span class="s-info-value">${allPokemonInfo[i].height}</span>
                            <span class="s-info-name">Größe</span>
                        </div>
                    </div>

                    <div class="s-info-holder">
                        <div class="s-info">
                            <span class="s-info-value">Charizard</span>
                            <span class="s-info-name">Spezies</span>
                        </div>
                    </div>

                    <div class="s-info-holder">
                        <div class="s-info" id="s-info">
                            
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">

                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item w-20">HP</li>
                        <li class="list-group-item w-100">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${allPokemonInfo[i].stats.hp}%; background-color: var(--yellow); color: var(--blue);" aria-valuenow="25"
                                    aria-valuemin="0" aria-valuemax="100">
                                    ${allPokemonInfo[i].stats.hp}
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item w-20">DEF</li>
                        <li class="list-group-item w-100">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${allPokemonInfo[i].stats.defense}%; background-color: var(--rock-color);" aria-valuenow="25"
                                    aria-valuemin="0" aria-valuemax="100">
                                    ${allPokemonInfo[i].stats.defense}
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item w-20">ATK</li>
                        <li class="list-group-item w-100">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${allPokemonInfo[i].stats.attack}%; background-color: var(--fire-color);" aria-valuenow="25"
                                    aria-valuemin="0" aria-valuemax="100">
                                    ${allPokemonInfo[i].stats.attack}
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item w-20">SPD</li>
                        <li class="list-group-item w-100">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${allPokemonInfo[i].stats.speed}%; background-color: var(--flying-color);" aria-valuenow="25"
                                    aria-valuemin="0" aria-valuemax="100">
                                    ${allPokemonInfo[i].stats.speed}
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item w-20">sAT</li>
                        <li class="list-group-item w-100">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${allPokemonInfo[i].stats.specialAttack}%; background-color: var(--ghost-color);" aria-valuenow="25"
                                    aria-valuemin="0" aria-valuemax="100">
                                    ${allPokemonInfo[i].stats.specialAttack}
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item w-20">sDF</li>
                        <li class="list-group-item w-100">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${allPokemonInfo[i].stats.specialDefense}%; background-color: var(--ice-color);" aria-valuenow="25"
                                    aria-valuemin="0" aria-valuemax="100">
                                    ${allPokemonInfo[i].stats.specialDefense}
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item w-20">EXP</li>
                        <li class="list-group-item w-100">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${allPokemonInfo[i].exp / 10}%; background-color: var(--blue);" aria-valuenow="25"
                                    aria-valuemin="0" aria-valuemax="100">
                                    ${allPokemonInfo[i].exp}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">
                    3
                </div>
            </div>
        </div>
    `;
}

function setMovesToInfoCardHTML(move) {
    return `<span class="move-badge" style="background-color: var(--blue); color: var(--yellow);">${move}</span>`
}


function setAbilitiesHTML(abilitie) {
   return `<span class="s-info-value">${abilitie}</span>` 
}