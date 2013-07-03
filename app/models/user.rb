class User < ActiveRecord::Base
	attr_accesible :email, :password, :password_confirmation
	has_secured_password
	validates_presence_of :password, :on => :create
end
