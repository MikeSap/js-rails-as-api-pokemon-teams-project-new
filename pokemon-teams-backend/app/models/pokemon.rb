class Pokemon < ApplicationRecord
  belongs_to :trainer

  # validate: :too_many_pokes

  # def too_many_pokes
  #   byebug
  #   if !self.trainer.pokemons.count <= 6
  #     byebug
  #   end
  # end

end
