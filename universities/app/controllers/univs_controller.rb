class UnivsController < ApplicationController


 def index
    render :json => Univ.All
  end

  def show
    render :json => Univ.find(params[:id])
  end

  def create
    console.log('creating')
    @Univ = Univ.create({
                      :name => params[:name],
                      :website => params[:website],
                    })
    render :json => @Univ
  end

end
