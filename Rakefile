require 'rubygems'
require 'rake'

desc "View the index page in google chrome."
task :view do
  sh "google-chrome http://localhost:3000"
end

desc "Runs the dev server."
task :run do
  sh "ruby app.rb -p3000"
end

desc "Runs the compass watcher."
task :compass do
  sh "compass --watch"
end

desc "Create an archive of the site ready for deployment."
task :tar => :scrape do
  sh <<-HERE
    rm -fv site.tar.gz
    cd "tmp/site"
    tar -czvf ../../nationals_site.tar.gz *
    cd -
  HERE
end

desc "Deploy site to uwcycling.com/nationals"
task :deploy => :scrape do
  sh <<-HERE
    cd tmp/site
    scp -r * uwc:~/www/nationals
    cd -
  HERE
end

task :scrape do
  SCRAPE_PORT = 4576
  sh <<-HERE
    ruby app.rb -p#{SCRAPE_PORT} &
    sleep 2
    pid=$!
    wget -m -P tmp http://localhost:#{SCRAPE_PORT}
    kill $pid
    mv tmp/localhost\\:#{SCRAPE_PORT} tmp/site
  HERE
  puts
end

desc "Clear temp dir."
task :clean do
  sh "rm -rfv tmp/*"
end
