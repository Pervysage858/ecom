class CategoriesController < ApplicationController
  def new
    @category = Category.new
  end

  def create
    @category = Category.new(params_category)
  end


  private

  def params_category
    params.require(:category).permit!
  end
end