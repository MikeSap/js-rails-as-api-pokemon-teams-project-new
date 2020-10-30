const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


function main(){
    renderTrainers()
}

function renderPokemon(pokemons, pokeList){    
    pokemons.forEach(poke => {
    pokeList.innerHTML += `<li>${poke.nickname} (${poke.species})<button class="release" data-pokemon-id=${poke.id}>Release</button></li>`

    })
}

function renderTrainers (){

    let trainerList = document.querySelector('main') 
    
    fetch('http://localhost:3000/trainers')
    .then(resp => resp.json())
    .then(trainers => {        
        Object.values(trainers).forEach(trainer => {
            trainerList.innerHTML += `<div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
            <button data-trainer-id="${trainer.id}">Add Pokemon</button>
            <ul id=${trainer.id}> 
            </ul>
          </div>`
          let pokeList = document.getElementById(trainer.id)
          renderPokemon(trainer.pokemons, pokeList)
        })
    }) 
}

main()