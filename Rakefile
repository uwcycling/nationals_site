require 'rubygems'
require 'rake'

desc "View the index page in google chrome."
task :view do
  sh "google-chrome http://localhost:4567"
end

desc "Create an archive of the site ready for deployment."
task :tar do
  sh "rm -fv site.tar.gz"
  sh "wget -m -P tmp http://localhost:3000"
  sh 'cd "tmp/localhost:3000"; tar -czvf ../../nationals-site.tar.gz *; cd -'
end
