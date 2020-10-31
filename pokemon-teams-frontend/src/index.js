const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function main(){
    renderTrainers()
    addClickListeners()
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
            <button class = 'add-btn' data-trainer-id="${trainer.id}">Add Pokemon</button>
            <ul id=${trainer.id}> 
            </ul>
            </div>`
          let pokeList = document.getElementById(trainer.id)
          renderPokemon(trainer.pokemons, pokeList)
        })
    }) 
}


function addClickListeners(){
    document.addEventListener('click', function(e){        
        if (e.target.className === 'add-btn'){
            let trainerId = e.target.dataset.trainerId
            let teamList = e.target.nextElementSibling
            fetch('http://localhost:3000/pokemons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    trainer_id:  trainerId
                })   
            })
            .then(resp => resp.json())
            .then(newPoke => {
                teamList.innerHTML += `<li>${newPoke.nickname} (${newPoke.species})<button class="release" data-pokemon-id=${newPoke.id}>Release</button></li>`
            })
        } else if (e.target.className === 'release'){
            let listItem = e.target.parentElement
            let pokeId = e.target.dataset.pokemonId  
            fetch(`http://localhost:3000/pokemons/${pokeId}`, {method: 'DELETE'})
            .then(resp => resp.json())
            .then(deletedPoke => {
                console.log(deletedPoke)                
                // window.alert(deletedPoke)
            })
            .catch (error => console.log(error))      
        }
    })
}



main()