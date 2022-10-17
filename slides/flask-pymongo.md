---
layout: presentation
title: Pymongo & Flask
permalink: /slides/pymongo-flask/
---

class: center, middle

# Pymongo & Flask

Python-based web application technology stack.

---

# Agenda

1. [Overview](#overview)
1. [Virtual Environments](#venv)
1. [Pymongo](#pymongo)
1. [Flask](#flask)
1. [Pymongo + Flask](#combined)
1. [Conclusions](#conclusions)

---

name: overview

# Overview

--

## Concept

Developing web applications requires us to build code to server web pages to web browser that request them, as well as maintain data in a database. We will focus on using a few popular modules in Python to help with this:

--

- [pymongo](https://pymongo.readthedocs.io/en/stable/index.html) - a module to help connect and work with data in MongoDB databases

--

- [flask](https://flask.palletsprojects.com/en/1.1.x/) - a lightweight web application framework to take care of many mundane tasks faced by all web apps.

---

name: venv

# Virtual Environments

--

## Concept

Python comes with an ability to create virtual environments.

--

- a virtual environment is a sandboxed areas of memory, where modules can be installed without affecting the modules installed and available in other environments.

--

- this allows each project to have its own isolated memory area with its own set of module dependencies, which may be different from that of other projects.

--

- when developing an application that depends upon a specific set of modules, it is good practice to install those modules into a virtual environment.

---

template: venv

## Setup

Create a new virtual environment with the name `.venv`:

```bash
python3 -m venv .venv
```

--

Activate the virtual environment named `.venv`...

- on Mac:

```bash
source .venv/bin/activate
```

--

- on Windows:

```bash
.venv\Scripts\activate.bat
```

---

name: pymongo

# Pymongo

--

## Concept

`pymongo` is a popular module to help Python programs connect to and issue commands to MongoDB databases. It simplifies...

--

- connecting to a MongoDB database

--

- issuing **CRUD** commands to the database

--

- modifying the **database settings**

---

template: pymongo

## Installation

To install the dependencies, like `pymongo`, into our local development environments, we use `pip`, the default Python "package manager" - software that takes care of installing the correct version of any module into your in the correct place for the current environment.

```bash
pip3 install pymongo
```

--

Once installed in the development environment, a Python program can import `pymongo`. It is also useful to import the `bson` package's `ObjectId` class that is a Python representation of MongoDB's data type for document `_id` fields. And we will import the `datetime` module to keep track of the date and time when documents are created.

```python
import pymongo
from bson.objectid import ObjectId
import datetime

```

---

template: pymongo

## Connect to a database

The basic pattern of initializing a connection to a database server:

```python
import pymongo # import the module

# make a connection to the database server
connection = pymongo.MongoClient("your_db_host", 27017,
                                username="your_db_username",
                                password="your_db_password",
                                authSource="your_db_name")

# select a specific database on the server
db = connection["your_db_name"]
```

--

name: pymongo-connection

The variable `db` can now be used to perform the standard database **CRUD** operations.

--

If connecting to a database server on the local machine, your connection might be as simple as:

```python
connection = pymongo.MongoClient('mongodb://localhost:27017')
```

---

template: pymongo

## Create a new document

A new document can be constructed as a Python dictionary:

```python
doc = {
    "name": "Foo Barstein",
    "email": "fb1258@nyu.edu",
    "message": "We loved with a love that was more than love.\n -Edgar Allen Poe",
    "created_at": datetime.datetime.utcnow() # the date time now
}
```

--

Use the [insert_one()](https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html#pymongo.collection.Collection.insert_one) and [insert_many()](https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html#pymongo.collection.Collection.insert_many) methods to create new documents and save them to the database.

```python
mongoid = db.collection_name.insert_one(doc)
```

--

- The unique id of the newly-inserted document is returned

---

template: pymongo

## Read existing records

Use the [find()](https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html#pymongo.collection.Collection.find) method to retrieve existing documents from the database collection.

```python
docs = db.collection_name.find({
    "email": "fb1258@nyu.edu"
})

for doc in docs:
    output = '{name} ({email}) said "{message}" at {date}.'.format(
        name = doc.name,
        email = doc.email,
        date = doc.created_at.strftime("%H:%M on %d %B %Y") # nicely-formatted datetime
    )
    print(output)
```

--

Or retrieve just a single document with [find_one()](https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html#pymongo.collection.Collection.find_one):

```python
doc = db.collection_name.find_one({
    "email": "fb1258@nyu.edu"
})
```

---

template: pymongo

## Read existing records (continued)

If the field names of records contain a spaces or special characters, it is required to refer to the fields within a given document using an alternate Dictionary syntax:

```python
docs = db.jobs.find({
    "Agency":"DEPT OF PARKS & RECREATION",
    "Salary Range To": { "$gt": 30000 }
})

for doc in docs:
    output = '{title} ({agency}) - {salary_to}'.format(
        agency=doc["Agency"],
        title=doc["Business Title"],
        salary_to=doc["Salary Range To"]
    )
    print(output)
```

---

template: pymongo

## Sort, limit, and count

The syntax for sorting with `pymongo` is almost identical to using the `mongo` command shell.

```python
# sort docs in descending order of insertion date
docs = db.collection_name.find({}).sort("created_at", -1)
```

--

Similarly, `limit()` works like in the `mongo` shell:

```python
# show the 10 most recently created matching documents
docs = db.collection_name.find({ "email": "fb1258@nyu.edu" } ).sort("created_at", -1).limit(10)
```

--

Counting documents works a bit differently from the `mongo` shell, with the `count_documents()` function:

```python
# determine how many matching documents exist in the collection
count = db.collection_name.count_documents({ "email": "fb1258@nyu.edu" })
```

---

template: pymongo

## Update an existing record

Use the [update_one()](https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html#pymongo.collection.Collection.update_one) or [update_many()](https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html#pymongo.collection.Collection.update_many) methods to update existing documents from the database collection.

```python
db.collection_name.update_one( {
    { "_id": ObjectId(mongoid) }, # match criteria
    {
        "$set":{
            "message": new_message
            "created_at": datetime.datetime.utcnow() # the date time now
        }
    }
})
```

--

- we use the `ObjectId` class of the `bson` module to ensure the `_id` field of the matching document is properly typed.

--

- the `$set` operator is used to indicate which fields in the document should be updated.

--

- assume `new_message` is a variable defined somewhere earlier in the code.

---

template: pymongo

## Delete an existing record

Use the [delete_one()](https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html#pymongo.collection.Collection.delete_one) or [delete_many()](https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html#pymongo.collection.Collection.delete_many) methods to to delete existing documents from the database collection.

```python
db.collection_name.delete_one({
    "_id": ObjectId(mongoid)
})
```

---

template: pymongo

## Aggregation

Create an aggregation pipeline with the `aggregate()` function is virtually identical to its `mongo` shell cousin.

```python
# filter stage to match only jobs paid hourly
sal_freq_filter = { "$match": {"Salary Frequency": 'Hourly'} }

# group stage to group jobs by agency
group_by = {
    "$group": {
        "_id": "$Agency",
        "count_pos": { "$sum": "$# Of Positions" }
    }
}

# order stage to order by number of positions in descending order
order_by = { "$sort": { "count_pos": -1 } }

# perform the aggregation pipeline and get results
result = db.jobs.aggregate( [ sal_freq_filter, group_by, order_by ] )
```

---

name: flask

# Flask

--

## Concept

Programming web apps in Python is usually done using a framework - a readymade code library that provides a lot of the basic functionality all web apps share in common.

--

- **detecting an incoming HTTP request** from a web browser or native app to the server

--

- providing some tools for **inspecting that request and crafting a response**

--

- **issuing an outgoing HTTP response** from the server to the web browser or native app.

---

template: flask

## Installation

Use `pip` to install into the local development environment.

```bash
pip3 install Flask
```

--

Once installed in the development environment, a Python program can import `Flask` and whichever other features of the `flask` framework it requires.

```python
from flask import Flask, render_template, request, redirect, abort, url_for, make_response
```

---

template: flask
name: flask-instantiation

## Instantiate the app

Instantiate a `flask`-based web app...

```python
app = Flask(__name__)
```

--

General notes about the built-in Python variable, `__name__`, used as an argument here:

--

- The built-in Python variable `__name__` refers to the string `"__main__"` if the Python script within which it is mentioned has been executed directly.

--

- If the Python file within which the `__name__` variable is mentioned has been imported into another Python script, it will refer to a string with the name of the imported script file.

--

- Thus, `__name__` makes it easy to determine whether code is running in the main script file or in an imported script file.

---

template: flask

## Routes

> Modern web applications use meaningful URLs to help users. Users are more likely to like a page and come back if the page uses a meaningful URL they can remember and use to directly visit a page.
>
> -[Flask Quickstart](https://flask.palletsprojects.com/en/1.1.x/quickstart/#routing)

--

- for example, the web address, `http://myapp.com/latest-news` is much easier to understand intuitively than `http://myapp.com/index.py?d=4`.

--

- a web application can define routes - intuitive URLs to which the server is designed to respond to incoming HTTP requests.

--

- web browsers can then make HTTP requests to those route URLs and expect to receive a response from the server.

---

template: flask

## Plain text route

Perhaps the simplest example of a route using `flask` - a route for the home page of a web app that simply returns the text, `"Welcome!"`

```python
@app.route('/')
def show_home():
    response = make_response("Welcome!", 200) # put together an HTTP response with success code 200
    response.mimetype = "text/plain" # set the HTTP Content-type header to inform the browser that the returned document is plain text, not HTML
    return response # the return value is sent as the response to the web browser
```

--

- The decorator, `@app.route('/')`, indicates that `flask` should automatically call the `home()` whenever a request comes in for the `/` route.

--

- within any route function, the [request](https://flask.palletsprojects.com/en/1.1.x/quickstart/#accessing-request-data) object contains data from the incoming HTTP request, and the [response](https://flask.palletsprojects.com/en/1.1.x/api/#response-objects) object's properties can be modified to control features of the response.

--

- the **return value** of a route function determines the **body** of the response to the web browser that initiated the request.

---

template: flask

## Static HTML route

Instead of plain text, it is more common to respond to a request with an HTML document. This is most easily done by saving an HTML document into a separate file, let's call it `templates`/`foo.html`:

```html
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <p>Welcome!</p>
  </body>
</html>
```

--

name: foo-route

A `flask` route for the meaningful URL, `/foo`, can be created to return the contents of this HTML file.

```python
@app.route('/foo')
def show_foo():
    return render_template('foo.html')
```

---

template: flask
name: foo-template

## Passing data to HTML templates

HTML templates can be designed to accept variables and plug them into the HTML at designated spots. Let's call this file `templates`/`bar.html`:

```html
<html>
  <head>
    <title>&#123;&#123;title&#125;&#125;</title>
  </head>
  <body>
    <p>&#123;&#123;paragraph_text&#125;&#125;</p>
  </body>
</html>
```

--

A `flask` route for the meaningful URL, `/bar`, can be created to pass data to the HTML template and return the resultant contents.

```python
@app.route('/bar')
def show_bar():
    return render_template('bar.html', title='Hello', paragraph_text='Welcome!')
```

---

template: flask
name: foo-template

## Passing data to HTML templates (continued)

It is possible to pass array data to templates:

```python
@app.route('/cheese')
def show_cheeses():
    return render_template('cheeses.html', good_cheeses=['gorgonzola', 'brie', 'limburger'])
```

--

name: flask-template-iteration

This array could be iterated through in the template, `templates`/`cheeses.html`:

```html
<html>
  <head>
    <title>Cheeses</title>
  </head>
  <body>
    <p>Some delicious cheeses:</p>
    <ul>
      &#123;% for cheese in cheeses %&#125;
      <li>&#123; cheese &#125;</li>
      &#123;% endfor %&#125;
    </ul>
  </body>
</html>
```

---

template: flask

## Handling HTTP POST requests

Imagine a web page showed an HTML form the user could fill in and submit.

```html
<form method="POST" action="/save">
  <input type="text" name="fname" />
  &lt;textarea name="fmessage"&gt;&lt;/textarea&gt;
  <input type="submit" value="Save!" />
</form>
```

--

By default, routes expect to receive HTTP **GET** requests. It is possible to set up routes for HTTP **POST** requests by using the `methods` decorator argument.

```python
@app.route('/save', methods=['POST'])
def handle_save():
    # get form data included in the body of the POST request
    name = request.form['fname']
    message = request.form['fmessage']

    # do something fabulous with this data here

    return redirect(url_for('show_foo')) # tell the browser to make a follow-up request for the /foo route
```

---

template: flask
name: show-something-route

## Parameterizing routes

Route URLs can hold parameters. For example, we can set up a route named `/show` which accepts a parameter that we'll automatically store in a variable named `something`:

```python
@app.route('/show/<something>')
def show_it(something):
    return render_template('bar.html', title=something, paragraph_text=something)
```

--

- if a web browser makes a request for `show/me`, then the variable `something` will hold the value `"me"`; if a web browser makes a requests for `/show/25251`, then the variable `something` will hold the value `25251`; and so on.

--

- in this example, for simplicity, we pass along the value of `something` as the `title` and `paragraph_text` value for the [foo.html template](#foo-template) defined earlier.

---

template: flask

## Linking from a template to a route

In `flask`'s templating engine, it is possible to automatically generate the correct links from a template to a route by using the `url_for()` method.

--

For example, this code, if placed within a template file, would link to the [/foo route](#foo-route):

```html
<a href="&#123;&#123; url_for('/show_foo') &#125;&#125;"> click me </a>
```

--

- note that the `url_for()` function expects to receive the name of the function associated with the target route, not the route URL itself.

---

template: flask

## Linking from a template to a route (continued)

If the target route expects arguments to be supplied to it, such as our parameterized [/show/something](#show-something-route) route did, then these can be supplied as additional arguments to `url_for()`:

--

For example, this code, if placed within a template file, would link to the `show/something` route, with `"me"` passed into the `something` variable:

```html
<a href="&#123;&#123; url_for('/show_it', something='me') &#125;&#125;">
  click me
</a>
```

---

template: flask

## Base templates

Most pages of a web site share a lot of HTML code in common - especially the top and bottom sections of th HTML.

--

- `flask` allows you to create a **base template** containing the common code that will be incorporated automatically into each page.

--

- this allows your template HTML files to focus on what is different from one page to the next.

---

template: flask

## Base templates (continued)

For example, here is a simple base template in a file named `templates`/`base.html` containing boilerplate HTML code with a block named `container` in the middle for each page's unique content to be placed.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Very Ordinary Site</title>
  </head>
  <body>
    <div class="container">
      <header>This is the header</header>
      <main>&#123;% block container %&#125; &#123;% endblock %&#125;</main>
      <footer>This is the footer</footer>
    </div>
  </body>
</html>
```

---

template: flask

## Base templates (continued again)

Other templates can now indicate that their contents should be wrapped inside the base template code.

--

For example, here is a template named `templates`/`baz.html`, which will automatically include the code from the base template.

```html
&#123;% extends 'base.html' %&#125; &#123;% block container %&#125;
<p>
  Put the unique content of this template between the begin/end of the container
  block
</p>
&#123;% endblock %&#125;
```

---

name: combined

# Pymongo + Flask

--

## Concept

A modern web application inevitably involves:

--

- front-end code (always HTML and CSS, usually with some Javascript)

--

- back-end code (in our case Python with `flask`)

--

- database (in our case MongoDB connected from Python with `pymongo`)

---

template: combined

## Routes with database integration

It is, of course, possible to develop `flask` routes that interact with a MongoDB database using `pymongo`.

--

For example, here is a route that pulls documents from a database and passes them to a template:

```python
@app.route('/read')
def read():
    docs = db.collection_name.find({})
    return render_template('read.html', docs=docs) # render the read template, passing it the list of documents
```

--

- this assumes that `app` has alrady been [defined as a Flask app](#flask-instantiation) and `db` has been defined as a [connection to a database](#pymongo-connection).

--

- the template can now [iterate through the list](#flask-template-iteration) of documents and output some details about them as HTML.

--

- ... and much more.

---

name: conclusions

# Conclusions

--

- Thank you. Bye

```

```

```

```
