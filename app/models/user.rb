class User < ApplicationRecord
  has_secure_password 

  validates :username, presence: true, uniqueness: true
  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }


  def frontend_data
    {
      id: id,
      username:username
  }
  end

  has_and_belongs_to_many :clubs
  has_many :comments
  
end