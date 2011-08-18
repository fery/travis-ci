class HomeController < ApplicationController

  # a simple controller just for the home page
  def index
    render :text => '', :layout => layout?
  end

end
