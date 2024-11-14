class HomeController < ApplicationController 
  def index
    
  end

  def dashboard
    if !current_user.admin
      return redirect_to root_path
    end
  end
end