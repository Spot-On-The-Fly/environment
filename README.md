# environment
Vagrant environment to experiment in...

##setup
All you need to do is run

`vagrant up`

and then once that is complete, and when you want to get into a linux environment, run 

`vagrant ssh`

and then you'll be in the environment!

##files and stuff
To get files into the the linux environment, there is a shared folder setup so that any files/folders in the same directory as the vagrant file will appear in the following directory on the linux machine:

`/vagrant/`

##access on the web
if you've wrote something in nodejs which requires accesing `localhost:4444` or something like that then you will need to use port 4444 as I have set up the port forwarding on the vagrant machine to work with this port. if you want to access:

`http://localhost:4444` 

then please go to 

`http://192.168.50.2:4444/` 
