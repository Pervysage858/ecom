class UsersController < ApplicationController
  before_action: :authenticate_admin
  layout 'admin', :only => [:dashboard]
  
  def new
    @user = User.new
  end

end