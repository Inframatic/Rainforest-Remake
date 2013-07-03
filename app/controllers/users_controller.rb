class UsersController < ApplicationController
  def new
  	@user = User.new
  end

  def create
  	params.permit!
  	@user = User.new(params[:user])
  	if @user.save
  		redirect_to products_ur, :notice => "Signed up!"
  	else
  		render "new"
  	end
  end
end
