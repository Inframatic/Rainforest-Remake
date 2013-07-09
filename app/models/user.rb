class User < ActiveRecord::Base
	# attr_accesible :email, :password, :password_confirmation
	has_secure_password
	validates_presence_of :password, :on => :create
	has_many :reviews
	has_many :products, :through => :reviews
	validates_presence_of :name
end
