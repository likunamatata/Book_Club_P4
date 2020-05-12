class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :club
  has_many :subcomments
end
