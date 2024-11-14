class StoresController < ApplicationController
  layout 'admin'
  def index
    if !current_user.admin
      return redirect_to root_path
    end
    @stores = Store.all
  end

  def new
    @store = Store.new
  end
end
