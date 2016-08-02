class UnivsController < ApplicationController


 def index
    render :json => Univ.all
  end

  def show
    render :json => Univ.find(params[:id])
  end

  def create
    @Univ = Univ.create({
                      :name => params[:name],
                      :site => params[:website],
                    })
    render :json => @Univ
  end
  def update

  end

  def destroy
    @univ = Univ.find(params[:id])
    if @univ
      @univ.destroy
      render :json => {:deleted => true} if @univ
    else
      render :json => {:deleted => false}
    end
  end

end
