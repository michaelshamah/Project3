class ApisController < ApplicationController
  def index
    name= params[:name]
    country=params[:country]
    puts 'hello'
    puts name
    response =HTTParty.get("http://universities.hipolabs.com/search?name=#{name}&country=#{country}")
    render :json => response
  end
end
