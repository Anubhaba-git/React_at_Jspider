# class-1 📅 April 14:

# What is Rest parameter?

# What do you mean by spread operator?

# Difference between rest parameter and spread operator?

# What do you mean by destructuring?

# What is array and object destructuring?

# Difference between array and object destructuring?

# Class-2 📅 April 15:

# 1. What are the types of Export?

=> In JavaScript (especially with ES6 modules), default export and named export are two types of export
=>A module can export one thing as the "default" export. This means that there can only be one default export per module.

# Example:-

## Exporting a function as default

const myFunction = () => {
console.log("Hello World");
};
export default myFunction;

// Exporting an object as default
const myObject = { name: "John", age: 30 };
export default myObject;

## Importing default

# Example:-

import myFunction from './myModule'; // You can name it whatever you want
myFunction(); // Calls the function

import myObject from './myModule'; // You can name it whatever you want
console.log(myObject); // Logs the object
Key Points:

✅Only one default export per module.

✅The import name can be anything (you don't have to match the exported name).

## ❤️2. Named Export

Description: Named exports allow you to export multiple values from a module, and each export must be imported by its specific name. You can have multiple named exports in a module.

# Syntax:

// Exporting variables/functions as named exports
export const myVariable = 42;
export const myFunction = () => {
console.log("Hello World");
};

// Or, you can export them together:
const myObject = { name: "John", age: 30 };
export { myObject };

# Importing Named Exports:

# Example:-

import { myFunction, myVariable } from './myModule'; // Must use the exact names
myFunction(); // Calls the function
console.log(myVariable); // Logs the value of myVariable

✅Key Points:

✅You can have multiple named exports per module.

✅The import name must match the exported name unless you alias it.

# Example:-

import { myFunction as func } from './myModule'; // You can alias it if needed

## ❤️Comparison(DIFFERENCE)

| Feature               | Default Export                                                   | Named Export                                                      |
| --------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Number of Exports** | Only **one default export** per module                           | Can have **multiple named exports** per module                    |
| **Export Syntax**     | `export default myFunction;`                                     | `export { myFunction };`                                          |
| **Import Syntax**     | `import myFunction from 'module';`                               | `import { myFunction } from 'module';`                            |
| **Flexibility**       | Can import using **any name**                                    | Must import using the **exact exported name**                     |
| **Use Case**          | Use when a module exports **one main value, function, or class** | Use when exporting **multiple values or functions** from a module |

# 😊Example Combining Both:

You can use both default and named exports in the same module:

# Example:-

// myModule.js
const defaultExport = () => {
console.log("This is the default export");
};

const namedExport1 = () => {
console.log("This is named export 1");
};

const namedExport2 = () => {
console.log("This is named export 2");
};

export default defaultExport;
export { namedExport1, namedExport2 };

# Example
 
// Importing
import defaultExport from './myModule';
import { namedExport1, namedExport2 } from './myModule';

defaultExport(); // Calls default export function
namedExport1(); // Calls named export 1 function
namedExport2(); // Calls named export 2 function

2. How can i import the file ?
   🔹 1. Importing a Default Export
   If the file you're importing has a default export:

// Default export
export default function add(a, b) {
return a + b;
}

import add from './math'; // No curly braces needed
console.log(add(2, 3)); // Output: 5
✅ You can give the import any name, since it's the default.

🔹 2. Importing Named Exports
If your file has named exports:

export const add = (a, b) => a + b;
export const multiply = (a, b) => a \* b;
Importing:

import { add, multiply } from './utils'; // Use curly braces and exact names
console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
✅ You must use the exact export names unless you alias them:

import { add as sum, multiply as product } from './utils';
console.log(sum(2, 3)); // Output: 5
console.log(product(2, 3)); // Output: 6
🔹 3. Importing Both Default and Named Exports

export default function subtract(a, b) {
return a - b;
}

export const square = (x) => x _ x;
export const cube = (x) => x _ x \* x;
Importing:

import subtract, { square, cube } from './mathUtils';
console.log(subtract(10, 5)); // Output: 5
console.log(square(3)); // Output: 9
console.log(cube(2)); // Output: 8

✅ Tips:
Always use relative paths (./ or ../) when importing local files.

Don’t include the file extension (.js) unless you're in certain setups (like Node.js with ES Modules).

If you're using React, the same rules apply for importing components and hooks.

# 3. What do you mean by module?

=> Collection of predefined codes.

# 4. what do you mean by Package?

=> collections of modules.

# 5. what do you mean by Library?

=> collection of packages .

# 6. what do you mean by Framework?

=> Collection of libraries.

# 7. What are the difference between ✅ Summary Table

Feature           Library                                Framework
Control            You call the code                     It calls your code
Flexibility        More flexible                         Less flexible
Learning Curve        Easier                               Steeper
Examples          Lodash, Axios, jQuery            Angular, Django, Laravel

# 8. What do you mean by import?

=> import is a keyword which is used to import a value from one module.

# 9. What do you mean by export?

=> Export is a keyword which is used to export a value from one module.

### Class-3 📅 April 15:

# Installation of React

1. npm create vite@latest
2. project name:project
3. select a framework:React
4. Select a variant :JavaScript
5. cd Project
6. npm install

### Class-4# 📅 April 16:

# What do you mean by module bundler

=> Module bundler is used to binding multiple files into single files.
=> web pack and rolup is a module bundler.Rolup is used in vite.

# Example of module bundler?

# What is Transpiler?

=> Transpiler is used to convert advance javascript to browser understandable language.
=>Babel is a transpiler.

# SPA(Single Page Application)

=> It contains only one html file.
=> Without reloading or refreshing whole content updated.
=> Starting download from where you are stop.

# How it works?

=> In three tier architecture the user send http request to the server then the server finds the data on the database then send a http response to the user.After that if the user send a request it send as a AJAX(Asynchronous JavaScript XML) request to the server and finding the data from the database and give JSON(JavaScript Object Notation) response or JSON data to the user.
If the user wants 1 st data then the data comes to the user. Then if the user wants second data then the first data is not deleted but it upload the 2nd data.

# MPA(Multi Page Application)

=>Multiple html pages.
=>Reloading all the pages always.
=> Starting from zero again and again.

# How it works?

=> In three tier architecture the user send http request to the server then the server finds the data on the database then send a http response to the user.After that if the user send a request it send as a AJAX(Asynchronous JavaScript XML) request to the server and finding the data from the database and give JSON(JavaScript Object Notation) response or JSON data to the user.
If the user wants 1 st data then the data comes to the user. Then if the user wants second data then the first data is deleted but it upload the 1st data and upload the second data also.

AJAX-REQ(Asynchronous js xml)
JSON-RES(JS Object Notation(JSON DATA))

## CBA(Component Based Architecture)

=> It convert the whole page to small small blocks.
or
In react the UI elements are broken into reusable components that manage their own state.

## Features of cba are

1. Modularity:-: The UI is broken down into smaller, isolated components, each managing its own state and behavior
2. Reusability:-Components are reusable across different parts of the application, reducing code duplication and improving development efficiency.
3. Encapsulation:- Each component encapsulates its logic, style, and state, ensuring that changes in one component do not affect others directly.
4. Composability:- Components can be combined to form larger components or UIs, allowing you to build complex interfaces from simple building blocks.

5. Separation of Concerns:- With CBA, each component has a clear responsibility (e.g., rendering UI, handling user input), which makes the application easier to manage and debug.

# Imperative and declarative

# Imperative:-

=>It give the information from the details .

- Imperative means we says for each and every .(Java Script)

# Declarative:-

=> We only instruct it not in detail.

# Why react is known as declarative language?

=> React is a declarative language that means What we need we only instruct it.(React)
✅ Why React is Declarative:
UI as a function of state:

You describe how the UI should look for a given state.

React takes care of syncing the DOM.

Less manual DOM manipulation:

No need to use document.createElement or appendChild. React does that for you.

Simplifies logic:

Just update the state, and React re-renders the UI accordingly.

Predictable and easier to debug:

UI changes are more predictable because they depend on the current state and props.

Cleaner and readable code:

It’s easier to understand what the UI is doing at a glance.

💡 Summary:
React is declarative because you describe what the UI should look like, and React handles how to make it happen in the DOM.

# Web pack
 
=> Web pack is a module-bundler.

# Vite use Rolup module bundler for what?

=> Un use variable, unnecessary code,comments Remove :- Dead Code Elimination.(Hot reloading and code reusability)
Module byundler developer or webpack engineer.
=> Minification(compress)

# Babel used for what?

=> Babel is a transpiler which is used to convert the advance js to browser understandable language.

# What is node js?

=> Node js is an environment.
=> node js is a run time environment.

# what is npm? Why we use?

=> NPM Is stands for node package manager
what is node modules?
What is public folder why it used?
What is src?

# What is package.json?

📦 What is package.json?
package.json is a configuration file used in every Node.js and React project.
It stores metadata about the project and lists all the dependencies (packages) your project needs.

🔑 Key things inside package.json:
Project name, version, description

Scripts to run the app (like start, build)

List of dependencies and devDependencies

Main entry point (e.g. index.js)

# What is package-lock.json?

🔒 What is package-lock.json?
package-lock.json is automatically generated when you install packages using npm.
It locks the exact version of every installed package (and their dependencies), to ensure consistency across all environments.
  
🔍 Why is it important?
Ensures everyone on your team installs the same versions

Prevents bugs from version mismatches

Makes builds more reliable

## What are the differnce between them?

🆚 Differences between package.json and package-lock.json

Feature package.json package-lock.json
📄 Purpose Describes the project and its dependencies Locks the exact versions of all installed packages
✏️ Editable by developer Yes – you can manually add/edit dependencies No – it's auto-generated by npm
🎯 Contains - Project name, version, scripts, dependencies - Full dependency tree with exact versions
📦 Dependency versions Can have version ranges (e.g. "^1.2.0") Has exact versions (e.g. "1.2.3")
🔄 Regenerates when? When you manually update or install packages Automatically when you run npm install
🔒 Guarantees same install? ❌ No (versions can differ slightly) ✅ Yes (ensures exact same versions every time)
📤 Should be pushed to Git? ✅ Yes ✅ Yes
📌 Summary:
package.json = Project setup + list of required packages

package-lock.json = Exact versions used (auto-managed by npm)

 

# What is dependencies?

dependencies:-we need some data from a particular location
✅ Correct Definition:
A dependency is a package or module that your project needs to work properly or add extra features.

It’s not just about getting data — it’s about getting functionality.

# What is dev dependencies?

✅ Definition of Dev Dependencies:
Dev dependencies are the packages that are only needed during development, not when your app is live in production.

They help you build, test, or lint your code — but your app doesn’t need them to actually run in the browser.

# Difference between dependencies and dev-dependencies?

=>difference between dev dependencies (only for development phase)and dependencies(for both development phase and peoduction phase).

# 🆚 Difference Between dependencies and devDependencies

Feature dependencies devDependencies
✅ Used in Production Yes – required when the app runs live No – not needed in the final product
🛠️ Purpose Core libraries that your app depends on Developer tools used only during development
📦 Examples react, axios, react-router-dom eslint, webpack, babel, jest
🧑‍💻 Used by The app itself (for users) Developers (for building, testing, linting)
💾 Install Command npm install <package> npm install <package> --save-dev or -D
🗃️ Goes in package.json "dependencies": {}

# npm-run -dev

npm run dev(development phase) :- It run the whole 5 file give a single file generate an url.
=>❓ What is npm run dev?
npm run dev runs the script named "dev" in the package.json file. It's often used to start the app in development mode.
.

🔑 Simple Explanation:
npm run dev starts a development server that watches your files, bundles them into one or more files, and serves them on a URL, typically http://localhost:3000.

# What is react and react-dom ?

=> react and react-dom both are the packages

# 📦 react Package

This package includes the core functionality of React.

It provides:

React.createElement()

Hooks like useState, useEffect, useContext, etc.

Component lifecycle handling

JSX transformation support (under the hood)

# 📦 react-dom Package

This package provides the methods to interact with the browser's DOM.

Without react-dom, you can't render components on the screen.

Key functions:

ReactDOM.createRoot()

ReactDOM.render() (legacy)

ReactDOM.hydrate() (for SSR)

🔄 Why are they separate?
Separating them allows React to support rendering in different environments:

react-dom for web apps

react-native for mobile apps

react-dom/server for SSR

# 👍✅✅✅✅✅What is script in react?

In React, a script usually refers to a command defined in the package.json file under the "scripts" section. These scripts are used to run, build, test, and manage the React application.

# class-5 📅 April 17:

# All File And Folder Structure of react

1. Node-modules
   => It store all the source code of the packages that we install inside it
2. public
   => We can use it statically.
   => Serve on the frontend.
3. Index.html
   => By default the html file will execute in our folder.
   =>
4. .gitignore
5. package.json
   =>
6. src
   =>Source file
   => Inside this react can run bydefaultly index.html file

7. node_modules/
   What it is: This folder contains all the packages (dependencies) that you install via npm or yarn using the npm install command.

What it stores: Source code of the libraries like React, ReactDOM, Webpack, Babel, etc.

Key Point: You don't usually need to modify anything in this folder directly. It’s managed automatically by npm/yarn.

2. public/
   What it is: This folder holds static assets that will be available in the final build of the app.

What it stores:

Static HTML files

Images, fonts, and other assets that don’t change often

Key Point: Files here are not processed by React and can be accessed directly. The main file here is index.html.

3. index.html
   What it is: This is the single HTML page where your React app gets loaded.

Default behavior: React doesn’t have multiple HTML files (like traditional websites). The entire app is rendered inside a <div id="root"></div> tag in this HTML file.

Key Point: React dynamically injects JavaScript, CSS, and components into this file.

4. .gitignore
   What it is: This file tells Git which files and folders to ignore when committing to a Git repository.

What it stores: Common entries in .gitignore for React include:

node_modules/ (because it’s generated by npm)

Build directories like build/

Temporary files or log files

Key Point: Ensures unnecessary files aren't tracked by version control.

5. package.json
   What it is: This is the metadata file for your project. It stores project information and dependencies.

What it stores:

Project name, version, description

Scripts (like npm start, npm build)

Dependencies and devDependencies

Key Point: This is where you add or remove packages for your project.

6. src/
   What it is: This is where all the React source code lives.

What it stores:

index.js: The entry point for the React app, where React is initialized and rendered inside the DOM.

Components: All the React components you write will be placed here (e.g., App.js).

Other files: Like CSS, images, utility functions, etc.

Key Point: This is where you’ll spend most of your time coding. Everything in src/ is processed by Webpack (or another bundler).

Example Folder Structure:
perl
Copy
Edit
my-react-app/
├── node_modules/ # Installed packages (don’t edit this)
├── public/
│ ├── index.html # The main HTML file
│ ├── favicon.ico # Favicon and static assets
├── src/
│ ├── index.js # Entry point for React
│ ├── App.js # Main component
│ ├── App.css # Styles for your app
│ ├── components/ # Your React components
│ ├── utils/ # Utility functions, services
├── .gitignore # Git ignore rules
├── package.json # Project metadata, dependencies
└── package-lock.json # Lock file for exact package versions
 
# <mark> package.json= user manual(summarized one)/brief oner</mark>

# <mark>package-lock-json=Indetailed one</mark> 

folder structure of js

# Component

=> Component is a reusable block of code which gives a piece of UI.
=> Dividing UI into a single single file.

# Destructuring:- Extract the values and assigned inside a variable.

# 📦 react-dom Package

This package provides the methods to interact with the browser's DOM.

# 📦 react Package

This package includes the core functionality of React.

## npm

=> npm is used to install and manage all the packages of node js.

# Class-6 📅 April 18:

## SIR NOTES

virtual dom= It is a copy of real dom
For The first time: send the data to real dom,then virtual dom then react
2nd:-unique key
<mark>Re-conciliation processs:- </mark>Comparing the new virtual dom with the old virtual dom and patching the upadated virtual dom with the real dom.
Virtual dom

# diffing algorithm (before React 18) It is slow .1 milli sec-3 lakh nodes comparision (now we use react fiber's . 1 millis sec- 12 lakh)

Compare New virtual dom with old virtual dom.

# Patching

Updating the update virtual dom to real dom is known as patching.
virtual dom= light weight copy of real dom.

### QUESTIONS

# 1. What do you mean by Re-conciliation?

=>Comparing the new virtual dom with the old virtual dom and patching the upadated virtual dom with the real dom.
Virtual dom(sir)
=> Reconciliation is the process React uses to update the UI efficiently. When a component's state or props change, React creates a new virtual DOM tree. It then compares this new virtual DOM with the previous one using a diffing algorithm to identify what has changed. Based on these differences, React updates only the necessary parts of the real DOM, minimizing performance costs and ensuring a smooth user experience.


# 2. What are the difference between Real dom and Virtual dom?

1. The Real DOM is handled by the browser, while the Virtual DOM is created and managed by React.
2. The Real DOM is the actual representation of a webpage in the browser and The Virtual DOM is a lightweight copy of real dom.
3. Real dom doesnot provide any unique key to the nodes but virtual dom provide one unique key to the nodes.

# 3. What do you mean by diffing algorithm?

✅Diffing is the process of comparing the previous Virtual DOM with the new Virtual DOM to determine what has changed.

✅React needs to know which elements have been added, removed, or updated so that it can update the Real DOM in the most efficient way possible.

✅The algorithm calculates the differences (or "diffs") between the two Virtual DOM trees and then updates the Real DOM based on those differences.

# 4. why we use react fiber's?

Because before react 18 version we are using the difing algorithm to compare between new virtual dom and old virtual dom but now in react 19 version we are using React fiber's because it is more faster than the diffing algorithm
=> The diffing algorithm compare 3 lakh code in 1 milli second but react fiber's are 4 time faster than the diffing algorithm.

# 5. what are the difference between diffing algorithm and react fiber's?

## Key Differences Between Diffing Algorithm and React Fiber:

Feature Diffing Algorithm React Fiber
Primary Goal To compare and find differences between To manage rendering, scheduling, and work prioritization.
the old and new Virtual DOM.

Focus Focuses on efficiently updating the Real DOM based on changes. Focuses on improving rendering performance with asynchronous work.
Usage Used to figure out the minimal set of changes Used to break down work into smaller tasks, prioritize work,
for the Real DOM. and handle updates asynchronously.
Rendering Works synchronously to render UI updates. Works asynchronously, allowing React to pause and resume work to
maintain UI responsiveness.

Handling of Updates Compares Virtual DOMs and determines Introduces incremental rendering, allowing prioritization and
what needs to change. interruption of updates.

Concurrency Not designed for concurrent or async updates. React Fiber enables concurrent rendering,
where updates can be processed in parallel.

Key Focus Areas Optimizing the process of finding differences Improving scheduling, asynchronous  
 between the old and new Virtual DOM. rendering, and UI responsiveness.

6. What are the features of React?

# CBA(Component Based Architecture) It convert the UI component to reusable components.

# Virtual Dom (for faster rendering and better performance)

# JSX(React uses JSX, which is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.

=> JSX combines the best of both worlds by allowing HTML structures in JavaScript, making the code more readable and easier to write.)

# Declarative.

=>In a declarative approach, you describe what you want the user interface (UI) to look like, and React takes care of how to update it. React manages everything behind the scenes and automatically updates the UI whenever the data changes.

In React, you create components that describe the UI at any given point in time. For example, you might have a button that shows how many times it has been clicked. You don't need to worry about updating the button manually after each click; React handles this automatically for you.

# React Hooks

Hooks are a newer addition to React that allows functional components to have state and side effects.
Some common hooks include:
useState: To manage local component state.
useEffect: To manage side effects like fetching data or subscribing to events.
useContext: For context API, allowing components to share data without passing props explicitly.

# Conditional Rendering

React allows components to render content based on certain conditions (e.g., if a user is logged in or not).

Conditional rendering is done using JavaScript expressions and can help create dynamic and interactive UIs.

# One-way data binding.

=>(One-way data binding is a data binding technique where data flows in one direction, usually from parent components to child components. This means that changes to the data automatically update the UI, but changes to the UI do not automatically update the data.)
=> React uses one-way data binding, meaning that data flows in a single direction, from parent to child components.

=>This makes the data flow predictable and easier to understand, ensuring that updates to the data automatically trigger UI changes.

# 7. What do you mean by Virtual dom?

8. What do you mean by patching?

   ## class-7 (Sir) 📅 April 19:

   ## React Features

   => CBA
   => Declarative
   =>jsx
   => Virtual DOM
   => One-way data binding
   => conditional rendering

   # JSX=>

   It's a template language like HTML.
   =>1. All self closing tag need to be closed.
   <br/>
   <hr/>
   <img/>

## 1. In html

<h1 class="demo"></h1>

<h1 className="demo"></h1>(In jsx)
   => The class attribute in jsx is specified as a className (in camel case).

2.<button onclick = "demo()"> click</button>(onclick=demo we call explicitely)

<button onClick(camel case)={demo}>click</button>
=> In jsx js events (onClick,Submit,click)we use camelCase.

3.  <label for="username">Username</label>(HTML)
    <label htmlFor=""></label>(JSX)

4.  HTML use js events(It use lower case,Need to call the function explicitely )
    JSX use React synthetic events(no need to call function function name is enough and camel case are used)

5.  In html if we have same element then it does not through error .
    Jsx= If we have same element in same level then mandatorily we have an parent element like div (rather than that we got error)

        Wrapping container(If in jsx if we have more than one elemnt at same level then mandatorily parent wrapping container is required).



        In jsx we can write the js without using script tag.

        ## main.jsx is the entry file of react.
        # createRoot is used to create a root from virtual dom to real dom

        => Toughest parent is root
        => Rules of jsx
        => in main.jsx all the things are write in lowercase.

        ### CLASS-7 Question
        1. What are the difference between html and jsx?
        # JSX                                                                                      HTML
        i)  All self closing tag need to be closed.                                   i)  Here no need to close the self closing tag.

    <br/>
    <hr/>
    <img/>
    ii) <h1 className="demo"></h1>(In jsx)
    => The class attribute in jsx is specified as a className (in camel case).                                                                                ii)  <h1 class="demo"></h1>

iii) <button onClick(camel case)={demo}>click</button> iii) 2.<button onclick = "demo()"> click</button>(onclick=demo we call explicitely)
=> In jsx js events (onClick,Submit,click)we use camelCase.

iv) <label htmlFor=""></label>(JSX) iv) <label for="username">Username</label>(HTML)
v) JSX use React synthetic events(no need to call function v)HTML use js events(It use lower case,Need to call the function explicitely )
function name is enough and camel case are used)

vi)Jsx= If we have same element in same level then mandatorily vi)In html if we have same element then it does not through error .
we have an parent element like div (rather than that we got error)
vii) In jsx we can write the js without using script tag. vii) But in html if we want to insert the js we use script tag which is mandatory.
viii) we use .jsx extension vii) we use .html extension

# 2. What is Main file?

       => main.jsx is the entry file of react.
       => in main.jsx all the things are writen in lowercase.

=> It connects your App.jsx to the real web page (HTML).

=> Without it, React wouldn’t know where or what to render.

# 3. What do you mean by wrapping container?

=> Wrapping container(If in jsx if we have more than one element at same level then mandatorily parent wrapping container is required).

# 4. Why we use createRoot in main.jsx file?

       # createRoot is used to create a root from virtual dom to real dom



       => Render the React app into the HTML page (usually inside a <div id="root">).

=>Start our React app,

=>Mount it to the HTML DOM,(means attaching your React component tree to a real HTML element in the browser — so the UI appears on the screen.)

     =>And unlock powerful new features in React 18+.(🧠 Concurrent Rendering

React can now prepare multiple UI versions at the same time.)

       => Toughest parent is root
       => Rules of jsx

# 5. why we use src? What are the components?

:

📁 Why do we use the src/ folder in React?
The src (short for source) folder is where all your React app code lives.

✅ Purpose of src/:
Keeps your project organized.

Holds your components, styles, logic, assets, and more.

This is the part of your project that gets compiled and shown in the browser.

## JSX RULE (Tomorrow)

Dependency:- If we are installed the Dependency then no need to install in another device.
Dev-Dependency:- When we use different device then it's necessary to download package-lock.json always.

# re-rendering problem - If react doesnot use virtual dom then what happend.

=> main.jsx is act like a bridge between react project and dom.
class-8 # 📅 April 21:

# Component- It is like a reusable building block which is used to create a UI.

Component----1)Class based component(class keyword) 2) Function based component(function keyword)= normal function or arrow functiom

## How to declare a function and call it.

return keyword return the value outside of function.

### Rules of Component

1. Component name must and should starts with capital letter
   (All the rules of identifier is aplied)
   e.g :- App
   AppCase
2. .jsx extension
3. component name and function name equal(recomended not mandatory)

#### NOTE POINT

we use const bcz we donot want to reinitialized

## calling by two ways
<mark>
Self closing tags
paired tag
</mark>


Why we write the component starts with capital letter

bcz browser treat as a html tag.

# 📅 April 22:

# COMPONENT:

- COMPONENT is like a function.
- COMPONENT is a reusable building block.
- Combination of component we can create a UI.
- To create a componet we have two ways;

# 1. Class Based Component:

- Using Class keyword we can create a class based component.
- It is lengthy than Function Based Component.
- It has more syntax than Function Based Component.
- Code looks longer and more complex compared to function-based.

# 2. Function Based Component

- Using function keyword and normal function and arrow function we can create a Function Based Component.
- This way is the modern way to create a component.
- This way is the simple to read,write and test.
- It has less syntax than Class Based Component.

* It is not mandatory The component name and function name will be same but it's recomended.
* Always set a function as const, it's not mandatory but recomended.
* To avoid the confusion we set function as const.

# Rules for Creating a component:

1. Component name must and should be starts with capital letter.
2. The extension for component is .jsx
3. There are 2 way to call a component: - Selfclosing tag (Recomended) - Paired tag

- While creating a folder the folder name starts from lowercase.

# 📅23 April

# Where we use jsx in App.jsx

=> We use () to wrapp it
=>jsx must inside return in the App.jsx

# Where we use js?

=> We use js Outside the return and inside the function
=> Any type of js can write(declaration,loop,if condition,in-built methods,creating another function)

# jsx expression denoted by {}

=> It alllows js inside jsx{}
=> If we write{ } inside jsx it used for writing js that means this is a jsx expression.
=> if we write {} outside the return then it act like a object.

# We can write single and multiline comments inside jsx .{/\* \*/}

# Example:-

       {/* hello */}=> Commnts in jsx (Single line)
        {/* hello */}
          {/* <h1>hii</h1>
          <p>Lorem, ipsum dolor.</p> */}

# Rules of JSX

1. => Wrapping Container
2. => We cannot create any js expression inside jsx but access a variable.
3. => Inside jsx we can not use loop.

=> All js variable,function or concept which donot have block{} we can use.

# for Example:-

          .map()✅
          .filter()✅
          .reduce()✅
          for each()✅

# We cannot use

    =>all loops(for,while,for of,for in)🙅
    =>all Conditional statement(if,if else,switch,else-if ladder)🙅
    bcz
    if{},if{}else{},for(Initialization and declaration;condition;Updation){Function body}


          # username,phone number all the details write inside jsx.
          # all primitive write inside jsx

# Answer

1.  import Component1 from "./components/Component1"
    import Component2 from "./components/Component2"
    import Navbar from "./components/Navbar"
    const App= ()=>{
    //js
    // const username= "Sushree"
    // console.log(username)

// for( let i=0;i<10;i++){
// console.log(i)

const myName= "Sushree Sonita Biswal";
const email="sushreesonitab@gmail.com";
const clgName="USBM";
const address="Infocity";
const DOB = "23-Jan-2003";
const hobbies=["Dancing","Singing","Cooking"];

     return (
        <div id="app">
          <Navbar/>
          {/* <h1>After navbar content </h1>
          {/* hello */}
          {/* <h1>hii</h1>
          <p>Lorem, ipsum dolor.</p> */}
          {/* {username}
          <Component1/>
          <Component2/>  */}
          <h1>My Personal Details are:-</h1>
          {myName}
          <br />
          {email}
          <br />
          {clgName}
          <br />
          {address}
          <br />
          {DOB}
          <br />
          {hobbies}

        </div>

    )

}
export default App 2. String,Number,Boolean,System,Undefined,Null,BigInt
const String="Sushree"

# Expressions in JSX are JavaScript expressions that can be used to evaluate and display dynamic values within JSX code

Sure! Here's a **summary of JSX expression rules**:

1. **Use `{}` to embed JavaScript expressions** (not full statements) inside JSX.
2. **Only expressions are allowed** – like variables, function calls, ternary (`? :`), or logical (`&&`) operators.
3. **No statements** like `if`, `for`, or `while` inside `{}`.
4. **JSX attributes can use expressions** (e.g., `src={url}`).
5. **Use `key` in lists** when using `.map()` to render elements.
6. **JSX must return one parent element**, so wrap with `<div>` or `<>...</>` (React Fragment).

=> {}is block inside looping statement and conditional statement.
=>{} inside react it known as expression.

=>

# 24 April 2025

# Conditional rendering

=> One variable can store one value
{userName}{age}

api github.com/users
convert json to js
name,image,id you nedd to create a table

Feature dependencies devDependencies
📦 Purpose Needed to run the app Needed to develop the app
🛠️ Examples react, express, axios eslint, jest, webpack, nodemon
📁 Installed in production ✅ Yes ❌ No (ignored in production)
🚀 Used in build/runtime ✅ Yes ❌ No
🔧 Used in development ✅ Yes ✅ Yes
📦 Added with npm install <pkg> npm install <pkg> --save-dev
📂 Where listed (package.json) "dependencies": {} "devDependencies": {}

26 April 2025
Project only

25 april 2025

# If we donot use return keyword then no error and no output is there.

# If we donot take selfclosing tag then it shows error.

Inline
module level
global level
If any file return a jsx that is known as component
Top component app.jsx
main.jsx is not a component bcz it does not return jsx

 ## 🗓️28 APRIL 2025

=> Props is an object where we can send the data from parent component to child component. 1. Props(properties)
=> Uni directional(parent to child and child to grand child but never go from child to parent)(Single direction) 2. Immutable(We cannot change the data but use only or access only)
=> With the help of props component reusability done.
=> While calling the component when we pass something that is known as props

## OWN

## PROPS

Here are 10 important points about **props** in React:

### 1. **Props are Read-Only:**

- Props are immutable in the child component. They can’t be changed directly. A child component can only use props to display or pass data but cannot modify them.
- If the parent component wants to change the value of a prop, it must update the state in the parent, which will automatically pass new props to the child.

### 2. **Props Are Used to Pass Data:**

- Props allow you to pass data from a **parent component** to a **child component**. This is the primary way to make components dynamic and reusable.
- You can pass anything as a prop: strings, numbers, objects, arrays, functions, and even other components.

### 3. **Props Can Be Functions:**

- You can pass functions as props to child components, allowing the child to invoke them to interact with the parent or perform actions like changing the state in the parent.

### 4. **Props Are Immutable:**

- The child component can only **read** props but cannot modify them. The parent is the only place where props can be updated.

### 5. **Props Are Read via `props` Object:**

- In the child component, props are accessed as an object. For example, `props.myProp` where `myProp` is the name of the passed property.

### 6. **Props Can Be Used for Dynamic Rendering:**

- Props enable dynamic rendering in components. By passing different values as props, you can make the same component render differently based on the data it receives.

### 7. **Default Props:**

- You can define default values for props using the `defaultProps` property in a component. This is useful when a prop is not passed by the parent component.

```jsx
MyComponent.defaultProps = {
  name: "Default Name",
};
```

### 8. **Props Can Be Nested:**

- Props can contain other props. This allows you to pass complex data structures (like objects or arrays) to child components and access their values inside the child.

```jsx
<Child user={{ name: "John", age: 30 }} />
```

### 9. **Prop Types Validation:**

- You can validate the type of props passed to a component using `prop-types` (a built-in library). This ensures that the correct type of data is passed and helps avoid bugs.

```jsx
import PropTypes from "prop-types";

function MyComponent({ name }) {
  return <div>{name}</div>;
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
```

### 10. **Props Can Be Spread:**

- You can use the **spread operator (`...`)** to pass all props from one component to another, which can be helpful when working with components that need to pass down many props.

```jsx
<Child {...props} />
```

---

### Summary:

- Props allow data flow from the parent to the child.
- They are immutable in the child.
- You can pass anything as a prop (functions, objects, arrays, etc.).
- Props enable dynamic and reusable components.

These principles are foundational to building React applications and understanding how components communicate with each other. Let me know if you'd like to explore any of these points in more detail!

Here are **10 key differences** between **dependencies** and **devDependencies** in a Node.js project (typically managed with `npm` or `yarn`):

### 1. **Purpose:**

- **Dependencies:** These are the packages required for the **runtime** of the application. They are essential for the application to function in production.
- **Dev Dependencies:** These are packages needed only during **development** (e.g., testing, bundling, compiling). They are not required in production.

### 2. **Installation Environment:**

- **Dependencies:** Installed in both **development** and **production** environments.
- **Dev Dependencies:** Installed only in **development** environments (`npm install --save-dev` or `yarn add --dev`).

### 3. **Production vs Development:**

- **Dependencies:** These packages are necessary for the application to run in production, such as web frameworks, database clients, etc.
- **Dev Dependencies:** These packages are not needed in production but are essential for tasks like testing, transpiling, or bundling (e.g., Babel, Webpack).

### 4. **Command to Install:**

- **Dependencies:** Installed using `npm install` or `yarn add <package-name>`.
- **Dev Dependencies:** Installed using `npm install --save-dev` or `yarn add <package-name> --dev`.

### 5. **Package.json Location:**

- **Dependencies:** Listed under the `"dependencies"` section in `package.json`.
- **Dev Dependencies:** Listed under the `"devDependencies"` section in `package.json`.

### 6. **Impact on Production Build:**

- **Dependencies:** Will be included in the production build.
- **Dev Dependencies:** Will **not** be included in the production build if `npm install --production` or `NODE_ENV=production` is set (i.e., they are excluded from production).

### 7. **Examples:**

- **Dependencies:** React, Express, Axios, MongoDB, lodash (libraries required for the app to function).
- **Dev Dependencies:** Jest, Babel, Webpack, ESLint, Prettier (tools for development, testing, and bundling).

### 8. **Usage in Deployment:**

- **Dependencies:** These are required when deploying an app to production since the app won’t function without them.
- **Dev Dependencies:** Not required in production deployment because they are related to development tasks.

### 9. **Command to Remove:**

- **Dependencies:** Remove using `npm uninstall <package-name>` or `yarn remove <package-name>`.
- **Dev Dependencies:** Remove using `npm uninstall --save-dev <package-name>` or `yarn remove <package-name> --dev`.

### 10. **Impact on Package Size:**

- **Dependencies:** These can affect the size of the app in production because they are bundled and deployed with the app.
- **Dev Dependencies:** These do not contribute to the production app size, as they are not included in the final build if properly excluded.

---

### Summary:

- **Dependencies** are crucial for the app's functionality in production, while **devDependencies** are necessary only for development tasks (like testing or building the app).
- You should be mindful of what you include as a dependency versus a dev dependency to optimize your app for production.

Let me know if you need any further details!

Here are **10 key differences** between **package.json** and **package-lock.json** in a Node.js project:

### 1. **Purpose:**

- **package.json:** Defines the metadata, dependencies, scripts, and configuration of the project. It is used to manage the project's settings and dependencies.
- **package-lock.json:** Locks the versions of installed dependencies to ensure consistent installs across all environments. It records the exact version of each dependency (including sub-dependencies).

### 2. **Content:**

- **package.json:** Contains information about the project like name, version, description, author, license, dependencies, devDependencies, and scripts.
- **package-lock.json:** Contains a detailed and flattened tree of all dependencies and sub-dependencies with their specific versions and other metadata (such as resolved URLs, integrity hashes).

### 3. **File Generation:**

- **package.json:** Created manually when starting a new project using `npm init` or `yarn init`, and it is edited by developers as the project evolves.
- **package-lock.json:** Automatically generated or updated when running `npm install` or `yarn install` to capture the exact versions of dependencies and their dependency tree.

### 4. **Version Control:**

- **package.json:** It typically includes version ranges for dependencies (e.g., `^1.0.0` or `~1.0.0`), meaning that you may get different versions of the dependencies on different machines.
- **package-lock.json:** Contains fixed versions of all dependencies and sub-dependencies (e.g., `1.0.0`), ensuring consistency across different environments.

### 5. **Dependency Management:**

- **package.json:** Lists the top-level dependencies (`dependencies` and `devDependencies`), but does not include the version information of sub-dependencies.
- **package-lock.json:** Records all the dependencies and their exact versions, including sub-dependencies (nested dependencies), to ensure identical dependency trees.

### 6. **Version Control in Projects:**

- **package.json:** Should be committed to version control (e.g., Git), as it is essential for identifying the project’s dependencies and configuration.
- **package-lock.json:** Should also be committed to version control to ensure that everyone working on the project has the same set of dependency versions.

### 7. **Environment Consistency:**

- **package.json:** Doesn’t guarantee the same dependency versions on different machines unless exact versions are used.
- **package-lock.json:** Guarantees that the same dependency versions are installed across all environments (developer machines, CI/CD pipelines, production).

### 8. **Installations:**

- **package.json:** When you run `npm install` or `yarn install`, npm installs dependencies as per the version ranges defined in `package.json`, potentially installing different versions depending on when and where the install happens.
- **package-lock.json:** When you run `npm install` or `yarn install`, it ensures that the exact versions and dependency tree from `package-lock.json` are installed, leading to identical setups.

### 9. **Manual Editing:**

- **package.json:** It is manually edited by developers to add or update dependencies, scripts, and other project configurations.
- **package-lock.json:** It should **not** be manually edited. It is auto-generated by npm/yarn during installations or updates, and should only be modified automatically when the dependencies change.

### 10. **Performance:**

- **package.json:** When installing dependencies without a `package-lock.json`, npm has to resolve the versions of all dependencies, which can take more time.
- **package-lock.json:** Speeds up the installation process by using the exact versions of dependencies listed in the lock file, without needing to resolve versions from scratch.

---

### Summary:

- **package.json** is the primary configuration file for your project, containing the essential metadata and dependencies (with version ranges), while **package-lock.json** ensures that all developers and environments are using exactly the same versions of every dependency.
- You should always commit both files to version control to ensure consistent setups across machines and environments.


 # 📅 April 30:
# Key:
- Key is used to give a unique value to element.

# Fragment:
- It will avoid unnecessary <div>.
- It's a Wrapper Container.
- Fragment is a empty container which is like as a parent container it is not create a node on DOM.
- Fragment is of two types:
# 1. Empty Fragment:
- it will not accept any prop.
- it is provided by js.
Ex:
return(
 <>
 </>
)
# 2. React Fragment:
- it is provided by js.
- it will accept only one prop.(i.e key)
Ex:
 <Fragment key={Index}>
  <h1> {Item} </h1>
  <h1> {Index} </h1>
  <Fragment/>
  //Throat light
  //rebouncing
  

  ## Fetch Method

  ## 🗓️01/06/2025

  ContextAPI
  UseReducer Hook
 ## 🗓️ 02/06/2025
  Custom Hook

  ## 🗓️03/06/2025
  Rain
  ## Debouncing
  =>Debouncing in React is a technique used to limit the rate at which a function is executed, particularly in response to rapidly occurring events such as user input. It ensures that a function is only called after a specified delay since the last event trigger, preventing unnecessary executions and improving performance. 
How Debouncing Works:
Event Trigger: An event, like a user typing in an input field, is triggered.
Timer Start: A timer is started with a predefined delay.
Event During Delay: If another event occurs within the delay period, the previous timer is cleared, and a new timer is started.
Execution: If no new event occurs within the delay, the function is executed.
   ### Throttling 
   => Throttling in React is a technique used to limit the rate at which a function is executed. It ensures that a function is called at most once within a specified time interval, regardless of how frequently the triggering event occurs. This is particularly useful for managing performance-intensive operations, such as handling scroll events, resizing windows, or making API calls, where frequent triggers can lead to performance issues or excessive resource consumption. 
Here's how throttling works:
Time Interval: A time interval is defined, representing the minimum delay between function executions.
First Call: When the function is first called, it is executed immediately.
Subsequent Calls: Any subsequent calls within the defined time interval are ignored.
Timer: After the initial execution, a timer is set. Once the timer expires, the function can be executed again.

## 🔍 Key Differences Table:
Feature	:-     Debouncing	            Throttling
Frequency:-	Runs once after delay	     Runs at regular intervals
Trigger timing:-	  After last trigger	    Every X ms during activity
Common use cases :- 	Search input, button clicks	 Scroll, resize, mousemove
Function control :-	Prevents function from running too often	Limits function to run periodically


  ## 🗓️04/06/2025
  React.Memo

  import React, { useState } from 'react';
import ReactChild from './ReactChild';

const ReactMemory = () => {
  const [count, setCount] = useState(0);  
//   const [val, setVal] = useState(0);  
  console.log("Child Component")

  return (
    <div>
      React Memory
      {/* <h1>{data.count}</h1> */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
##  <ReactChild  data={count}/> //It not rerender   the component that means not updating the parent props and show the previous value */}
      {/* <ReactChild  data={count,val}/> //It not rerender the component that means not updating the parent props and show the previous value */}
       <ReactChild  data="Hii All"/> {/* It  rerender the component that means it's updating the parent props again and again and gives a new value */}
    </div>
  );
};

export default ReactMemory;
//console.log(Boolean([])) 

//! HOC
## By using react memo we can stop the unnecessary rerender of te child component
### react.memo is a optimization technique
### HOC is a component which take another component as a argument and return a new component. 
//? prop change then allow to rerender it show the next value.
//? prop not change then donot allow to rerender it show the previous value.
//!Value based {count}-it is not getting updated
//!Reference based{{count}} - it is an object reference so it updated


 ###  PuredFunction :-  Always return same value.

  ### Impured Function:- Always return different value.
  ## usememo hook
  
//! UseMemo hook memorize the value of a pured function and it returns the same value .
//? it check the expensive function in the code .it execute the function only once.

  ## 🗓️05/06/2025

### Most important difference between usecallback and usememo
//? useCallback memorized a function and return a new function





## 16/06/2025

## REDUX

## Redux is a third party  state management external library which is used to handle the react js.
## predictable state(where state is updated ,where is going and where is coming)

## GOOGLE
React
🧠 What is Redux?
Redux is a third-party state management library for JavaScript applications, commonly used with React to handle application-wide state in a predictable and centralized way.

Redux helps manage "global state" — state that needs to be accessed or updated by multiple components.

🧭 Why Use Redux?
Predictable State: You always know how state changes, thanks to strict rules (reducers must be pure functions).

# Centralized Store: All state lives in one place, making debugging and testing easier.

# Debugging Tools: Integrates well with Redux DevTools.

# Scalability: As your app grows, Redux helps organize and manage state better.


=> Here we are creating three js file 
   1. store.js
   2. actions.js
   3. renders.js



import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
 
const App = () => {
    const {count,value}= useSelector((state)=>state)//useSelector select the state
    console.log(count)
    const dispatch = useDispatch  ()    //use dispatch used to dispatch the element

  return (
    <div>
      <h1>{count}</h1>
      <h1>{value}</h1>
     <button onClick={()=>dispatch({type:"incremment"})}>Increment</button>
     <button onClick={()=>dispatch({type:"decremment"})}>Decrement</button>
     <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
     <br />
     <input type="text"  placeholder='enter text' onChange={(e)=>dispatch({type:"inputvalue",payload:e.target.value})}/>
    </div>
  )
}

export default App


📂 File Structure Overview
To implement Redux, we typically break it into three core files:

1. store.js
This file creates the Redux store.

Combines reducers and applies any middleware like redux-thunk.

 ## Code
// store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;

## Code

2. actions.js
Defines action creators, which are functions that return action objects.

Actions describe what happened.

 
// actions.js
export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
## Code

3. reducers.js
Contains the reducer function, which tells Redux how to change the state based on the action.

Reducers are pure functions that take state and action as input, and return new state.

 
# reducers.js
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {;;
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;


## ClassBasedComponent
=> In class based component we are using class keyword


### 🧾 Definition of CBC (Class-Based Component) in React:

**CBC (Class-Based Component)** in React is a way of creating components using **ES6 classes** instead of functions.

---

### 📌 Official Definition:

> A **Class-Based Component** is a JavaScript class that extends `React.Component` and implements a `render()` method which returns React elements (JSX).

---

### 🧱 Syntax Example:

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

### 🧠 Key Features of CBC:

* Uses `class` and extends `React.Component`
* Has access to:

  * **State** via `this.state`
  * **Props** via `this.props`
  * **Lifecycle methods** like `componentDidMount()`, `shouldComponentUpdate()`, etc.
* Requires a `render()` method to return JSX

---

### 🔁 When to Use CBC:

* When you need to use **lifecycle methods**
* When managing **local component state** in older React versions (before Hooks)
* When maintaining older codebases

---

### 📌 Note:

Since React 16.8, **Function Components + Hooks** are preferred for new projects, but **Class-Based Components** are still fully supported and widely used in legacy apps.

 | Feature               | 🏷️ Class-Based Component (CBC)                       | 🧩 Function-Based Component (FBC)           |
| --------------------- | ----------------------------------------------------- | ------------------------------------------- |
| **Syntax**            | Uses ES6 `class` and `extends React.Component`        | Uses plain JavaScript functions (ES6+)      |
| **State Handling**    | `this.state`, `this.setState()`                       | `useState()` Hook                           |
| **Props Access**      | `this.props`                                          | Directly via function parameters            |
| **Lifecycle Methods** | Yes (e.g., `componentDidMount`, `componentDidUpdate`) | Use `useEffect()` for lifecycle equivalents |
| **Hooks Support**     | ❌ Not available                                       | ✅ Fully supported                           |
| **Code Reusability**  | Less flexible (need HOC or render props)              | More flexible with **custom hooks**         |
| **Boilerplate**       | More verbose (constructor, `this`, binding)           | Cleaner and shorter syntax                  |
| **Performance**       | Slightly heavier                                      | Lighter and more efficient                  |
| **Readability**       | More complex, especially with large components        | Easier to read and manage                   |