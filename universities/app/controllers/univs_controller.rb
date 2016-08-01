class UnivsController < ApplicationController


 def index
    response =HTTParty.get("http://universities.hipolabs.com/search?name=middle")
    render :json => response
  end

  def show
    render :json => Univ.find(params[:id])
  end

end
