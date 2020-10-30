class TrainersController < ApplicationController

    def index
        trainers = Trainer.all
        render json: trainers
    end

    def show
        trainer = Trainer.find_by(id: params[:id])
        if trainer
            render json: trainer, include: [id: trainer.id, name: trainer.name, pokemon: trainer.pokemons ]
        else
            render json: { message: 'Trainer not found' }
        end
    end

end
