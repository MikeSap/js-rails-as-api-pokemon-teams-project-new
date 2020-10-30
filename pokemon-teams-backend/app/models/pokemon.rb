class Pokemon < ApplicationRecord
  belongs_to :trainer

  # validate: :too_many_pokes

  # def too_many_pokes

  # end

end
