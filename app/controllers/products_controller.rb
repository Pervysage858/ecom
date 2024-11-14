class ProductsController < ApplicationController

  before_action :authenticate_admin
  layout 'admin'
  
  def index
    @products = Product.all
  end 

  def new
    @product = Product.new
  end

  def create
    byebug
    @product = Product.new(params_product)  
    if @product.save
      flash[:notice] = "Record created successfully"
      redirect_to products_path
    else
      render 'new'
    end
  end

  def show 
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(params_product)
      redirect_to products_path
    end
  end

  private 
  def params_product
    params.require(:product).permit!
  end 

end