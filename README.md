# Famous Artists

## Setup

- Fork and clone this repository
- `npm install`
- `npm run server`
- `npm run client`

# Full Stack React

Starting Repo: https://github.com/PrimeAcademy/full-stack-react-lecture

## Getting Started

Typically we use `npm start` to startup our apps. With our full-stack react apps we are going to do things a little differently.

By default `create-react-app` sets up our scripts in `package.json` like this:
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
``` 

So previously, when we ran `npm start` the command that was actually run for us was `react-scripts start`. This starts the React process that makes our client available on port 3000 and watches our `src` files to do the auto-refresh when they change. 

When we add server side code, we also need another port listening for our server requests. If you look at the starter code provided you'll see the following scripts in `package.json`:
```
  "scripts": {
    "start": "react-scripts build && node server/server.js",
    "client": "react-scripts start",
    "server": "nodemon  --watch server server/server.js",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```

The `client` script is now setup to run the same process we were running earlier this week. To run this script, open terminal and enter `npm run client`. This will start the create-react-app development server on 3000.

BUT we also need to kick off the server.  We're gonna need more terminal tabs!
In a new terminal tab enter `npm run server` to start our node server listening on 5000. 

So what's up with `npm start`?
The create-react-app development server is for just that - development. It is not part of the final product. When we eventually get to Heroku, everything will be served from our node/express server and `npm start` is setup to do that.

> Note the only thing changing here is how we are starting the React app for development. Everything we already know about our server remains the same. Routers, Modules, databases, etc don't change.


## Axios

Now that we have things up and running, let's get our client talking to our server!

React is a front-end framework. Let's hook it up to the back end! Unlike jQuery, React doesn't have a way to make AJAX (HTTP) requests out of the box. We need an additional library to make HTTP requests.

We'll be using `axios` as that library to make requests to our server for data. 

```
npm install axios
```

https://www.npmjs.com/package/axios


Top level component should be responsible for fetching data. In our case, this is the `App` Component, So we need to import axios into that component.

```JSX
import axios from 'axios';
```

## React Client GET songs 

Our Node server has a `/songs` route -- Let's make a function that requests our songs so we can show them on the DOM!

Add the following method to your `App` component:
```javascript
getSongs = () => {
  axios({
    method: 'GET',
    url: '/songs',
  }).then( (response) => {
    console.log(response)
    console.log(response.data)
  }).catch( (error) => {
    console.log(error)
  });
}
```

Axios looks pretty similar to jQuery `$.ajax()`, BUT it's a little different... We get back more info! Look at response. We get a lot more back -- our data that we sent is on the key `data`. So when you want to gain access to it, you have to use `response.data`.

### Proxy
Our client is looking at port 3000. Our server is on port 5000. 

How does the axios request which is made from port 3000 know to go to 5000??? 

BLACK MAGIC.... Or not. We setup a `proxy` for our call in the `package.json`. Notice the line:
```
"proxy" : "http://localhost:5000"
```

Basically, create-react-app is being told that if anyone comes knocking at door for port 3000 with an Ajax request, it should send them to port 5000 instead. 


## React Lifecycle

OK, so where do we call our `getSongs` method? In jQuery, we had `$(document).ready()`, but in React, that's not a thing...

React has a regular order of events, called a lifecycle. When we `extend` `Component` we gain access to these lifecycle methods.  

We've use one lifecycle method already - `render()`. This is called whenever a component's state or props change. What it returns is what shows up on the DOM. 

The next most common lifecycle method is `componentDidMount()`. This is called __once__ when the component loads, much like jQuery's `$( document ).ready()`.

> Note: There are more lifecycle methods availible, each with their own use.  You can learn more about the React lifecycle here: http://busypeoples.github.io/post/react-component-lifecycle/

We'll use the `componentDidMount()` method to initiate our call to our server when the component loads for the first time. 

Add a `componentDidMount` method to your `App` component to call `getSongs`:
```JSX
  // This gets called when the component loads
  // React equivalent of jQuery's `$( document ).ready()`
  componentDidMount() {
    console.log('component has mounted');
    this.getSongs(); // making our first call to the api
  }
```
