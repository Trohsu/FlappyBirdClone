# FlappyBirdClone

To get setup in a dev environment youll need a few things. 

- Visual Studio Code
  - Grab the JavaScript (ES6) code snippets package
  - Live Server is useful for generic testing.

- Parcel (Zero Configuration Build tool)
  - [Link to Site](https://parceljs.org/)
  
- Node.js
  - [Link to Site](https://nodejs.org/en/)

Once you have these you are basically good to go. For getting an environment setup for Phaser see the next section.

## Dev Setup for Visual Studio Code


Once you have Node installed, create a folder that you would like your game to be in. 

After that open a terminal in VS Code and run the following command:

`npm init`

The terminal will present you with a few options for setup, just hit enter on all of these unless you want to specify things that it asks for. 

Running this will create a new project create all the dependencies for a JS project. Specifically the package.json which we will focus on next. 

Now we need a build tool that can handle all of our node modules. 

run the following command `npm install --save-dev parcel`

Once we have the tool for building and bundling our dependencies we can add a script for npm to start our dev server for live debugging and development work.

Open up the package.json. 

under the scripts tag, add the following line under ""test""

`"start": "parcel src/index.html"`

Now you're good to go!

to start your dev server, run 

`npm run start`

When parcel starts, it will tell you what port and ip address it is running at. By default it starts at `127.0.0.1:1234`

You can configure ports, use of https, etc. Just check the Parcel documentation.



