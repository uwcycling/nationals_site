require 'rubygems'
require 'compass' #must be loaded before sinatra
require 'sinatra'
require 'haml'    #must be loaded after sinatra

# set sinatra's variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
#enable :static

configure do
  Compass.configuration.parse(File.join(Sinatra::Application.root, 'config', 'compass.config'))
  set :haml, { :format => :html5 }
end

# at a minimum, the main sass file must reside within the ./views directory.
# here, we create a ./views/stylesheets directory where all of the sass files
# can safely reside.
get '/stylesheets/:name.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass(:"stylesheets/#{params[:name]}", Compass.sass_engine_options)
end

get '/' do
  haml :index
end

get '/sponsors.html' do
  haml :sponsors
end

get '/courses.html' do
  haml :courses
end
