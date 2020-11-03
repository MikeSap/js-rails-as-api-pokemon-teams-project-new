class PokemonsController < ApplicationController
        
    def create       
        pokemon = Pokemon.new(pokemon_params.merge(nickname: Faker::Name.first_name, species: Faker::Games::Pokemon.name))
        pokemon_verification(pokemon)       
    end

    def destroy
        pokemon = Pokemon.find(params[:id])
        pokeName = pokemon.nickname
        pokemon.destroy
        render json: { message: "#{pokeName} successfully released"}
    end

    private

    def pokemon_params
        params.require(:pokemon).permit(:species, :nickname, :trainer_id)
    end

    def pokemon_verification(pokemon)
        if pokemon.save
            render json: pokemon
        else
            render json: {errors: pokemon.errors.full_messages}, status: 500        
        end
    end
end
