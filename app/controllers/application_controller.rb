class ApplicationController < ActionController::Base

  def authenticate_admin
    if user_signed_in? and !current_user.admin
      return redirect_to root_path
    end
  end

  def after_sign_in_path_for(resource_or_scope)
    if user_signed_in? and current_user.admin
      products_path
    else 
      root_path
    end
  end

  def after_sign_out_path_for(resource_or_scope)
    root_path
  end
end
