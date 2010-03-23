require 'rubygems'
require 'rake'

desc "View the index page in google chrome."
task :view do
  sh "google-chrome http://localhost:3000"
end

desc "Create an archive of the site ready for deployment."
task :tar => :scrape do
  sh "rm -fv site.tar.gz"
  sh 'cd "tmp/localhost:3000"; tar -czvf ../../nationals_site.tar.gz *; cd -'
end

desc "Clear temp dir."
task :clean do
  sh "rm -rfv tmp/*"
end

desc "Deploy site to uwcycling.com/nationals"
task :deploy => :scrape do
  #sh 'cd "tmp/localhost:3000"; scp -r * me:/tmp/www/nationals ;cd -'
  sh 'cd "tmp/localhost:3000"; scp -r * uwc:~/www/nationals ;cd -'
end

task :scrape do
  sh "wget -m -P tmp http://localhost:3000"
end
