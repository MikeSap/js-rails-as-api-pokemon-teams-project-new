class PokemonsController < ApplicationController
    
    def create        
        Pokemon.new(species: "#{Faker::Games::Pokemon.name}", nickname: "#{Faker::Name.first_name}", trainer_id:  )
    end

    # private

    # def pokemon_params
    #     params.require(:pokemon).permit(:species, :nickname, :trainer_id)
    # end

end
