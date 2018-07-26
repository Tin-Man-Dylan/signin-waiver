# keypad-app-basic
A basic keypad app that uses React front-end and Express back-end, and axios to send data between them. A good basic design to build off of.


## How to Use

After cloning this repo run the command "npm install" in the main folder, and in the client folder run "sudo npm install" (sudo is required for the react components)

Once everything is done installing you should make sure you have 2 terminals open, one in the main folder and ones in the client folder.
In the main folder run "PORT=3001 node bin/www", and in the client folder run "npm start"

To get a deployable version of the app the React needs to be built so it can be started by one server. To do this, in the client folder run "npm run build".
