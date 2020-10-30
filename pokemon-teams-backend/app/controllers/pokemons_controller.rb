class PokemonsController < ApplicationController
    
    def create
        
        Pokemon.create(species: "#{Faker::Games::Pokemon.name}", nickname: "#{Faker::Name.first_name}", trainer_id:  )
    end

end
