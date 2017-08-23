# Node-notes
One of my short term goals is to be proficient in Node.js and to achieve this goal I subscribed to the ([Udemy course by Andrew Mead](https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/overview)).
The best way to learn Node is by building Node apps.

## How app works

![node](https://user-images.githubusercontent.com/28790452/29630380-a6bbff44-8801-11e7-981a-da06793a6506.gif)

This is a command line application which takes notes from the argument when the program is run. For example: node app.js add -t memo -b learn Angular 
<br>
For a full list of commands: node app.js help
<br>
The notes are stored as objects in the notes-data.json file. The notes are stored and retreived using the node fs module with synchronous readFile and writeFile methods. As the notes are stored as JSON, JSON.stringify is used to store and JSON.parse is used in retrieval.
<br>
The argv objects is processed through the yargs module which describes parameters for various commands, such as the help text, an alias, and a required boolean ('demand').

#### Playground / Arrow Functions 
The ARGUMENTS object is an array-like object which returns the arguments passed to a function.
<br>
This does not work in an arrow function, but exposes some (apparently) global information.
#### JSON & FileSystem (fs)
With this module, we can use readFileSync and writeFileSync to create a new file.
<br>
Using JSON.stringify and JSON.parse, we can create a very simple form of database (like local storage).
#### Try / Catch 
This app uses  a TRY-CATCH block for reading the database. This way, if there is no value, an empty [] can be returned instead of an error. 
#### ES6 Features 
Const, arrow functions and terse object syntax are used.

### Project Installation

There are two methods to download the repository.

#### Method I: Familiar with Git?
Clone this repository, install dependencies, then run the project with the following:

```
> git clone git@github.com:artprofi91/Node-notes.git
> cd Node-notes
> npm install
```

#### Not Familiar with Git?
Click [here](https://github.com/artprofi91/Node-notes) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory and:

```
> npm install
```



