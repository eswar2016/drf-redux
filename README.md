# Redux DevTools + Django todomvc example

This repository shows how to use Django, Django Rest Framework, React, and Redux together.  It also utilizes
hot reloading via webpack and redux dev tools to enable time traveling state.

That said, it's a little slapped together.  It all works, but this ain't production level code.  But feel
free to use this to get a feel of how you can fit these things together.

Also, this is based off of Dan Abromov's todomvc example in https://github.com/gaearon/redux-devtools.  You can
find that here:

https://github.com/gaearon/redux-devtools/tree/master/examples/todomvc

## Running Example

First, clone the project:

```
git clone https://github.com/bigsassy/drf-react-redux.git && cd drf-react-redux
```

Next, create a virtualenv for your repository:

```
virtualenv env && source env/bin/activate && pip install -r requirements.txt
```

Now go into the Django project directory.

```
cd todomvc
```

This is our django project, which was created with `django-admin startproject` by myself when creating this
example repository.  I've changed a few things after running that command:

  * I've created a folder called `server` to store all apps created using `./manage.py startapp`.  Right
    now it has the initial `todomvc` app created by `django-admin startproject` as well as another app called
    `todo` that was generated by `./manage.py startapp todo`.
  * I've created a folder called `client` to store all of our React javascript code.  It's called `client` because
    this code will be ran on the client (i.e. the browser), as opposed to the Django code which will be ran on the
    server (thus that folder being called `server`).
  * There's some new files in the same directory as `manage.py` that's used to manage our javascript code.
    * `.babelrc` tells babel how to compile our JSX and ES2015 (i.e. ES6) code into javascript that's readable
     by today's browsers.
    * `package.json` is used to manage our node_modules directory (think virtualenv for javascript), as well as
     provide a custom command to run our webpack server that handles hot reloading, which is ran by `npm start`
     (kinda like `./manage.py runserver`).
    * `server.js` is our webpack dev server, used for serving our javascript in a way that allows it to be hot reloaded.
     When you run `npm start` it actually just calls `node server.js` to run this server.
    * `webpack.config.js` is the configuration file for the webpack server.  It tells webpack where to find our React
     javascript code and then how to transpile it and all it's dependencies.
    * `webpack-stats.json` is a file that'll be generated when you run this example project. It's created by the
     `django-webpack-loader` library and tells it how to let our Django templates point to the webpack dev server,
     allowing hot reloading in your app running from Django's web server.

Anyway, now go ahead and install the javascript dependencies in the root folder:

```
npm install
```

Then create the database for the Django project, and create a super user:

```
./manage.py migrate && ./manage.py createsuperuser
```

Now open this directory in a second terminal, and turn on your virtualenv by running `source ../env/bin/activate`.
Run the first command in one terminal, and the second command in the other terminal:

```
npm start
./manage.py runserver
```

Finally, login to your site via the admin: <http://localhost:8000/admin>

After you're logged in, you'll be able to use the Todo app and browse the API:

  * Todo App: <http://localhost:8000>
  * API: <http://localhost:8000/api>
# drf-redux
