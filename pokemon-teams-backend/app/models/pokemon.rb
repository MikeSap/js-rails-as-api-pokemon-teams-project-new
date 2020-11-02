class Pokemon < ApplicationRecord
  belongs_to :trainer

  validate :too_many_pokes

  def too_many_pokes    
    if self.trainer.pokemons.count >= 6
      errors.add(:trainer, 'Cant have more than 6 Pokemon on your Team!')
    end
  end

end
