---
layout: presentation
title: Data Storage For Apps
permalink: /slides/data-storage/
---

class: center, middle

# Data Storage For Apps

Various mechanisms for storing data in front- and back-ends.

---

# Agenda

1. [Overview](#overview)
1. [Cookies](#cookies)
1. [Local Storage](#local-storage)
1. [File Storage](#files)
1. [Relational Databases](#relational)
1. [MongoDB](#mongodb)
1. [Mongoose](#mongoose)
1. [Conclusions](#conclusions)

---

name: overview

# Overview

---

template: overview

## Concept

There are a variety of mechanisms apps can use to _store data_. These can be generally broken-down into two categories:

--

- Client-side
- Server-side

---

template: overview

## Client-server paradigm

A reminder of the "bread-and-butter" of the Internet: clients and servers:

![Front- and back-ends](../images/client_server_multiplicity.png)

---

template: overview

## Client-server paradigm

... and the technologies that often power each:

![Front- and back-ends](../images/client_server_front_back_ends.png)

---

template: overview

## Client-server paradigm

... often with a database attached to the server.

![Front- and back-ends](../images/client_server_databases.png)

---

template: overview

## Client-server paradigm

... or so-called serverless architectures.

![Front- and back-ends](../images/client_server_databases_serverless.png)

---

template: overview

## Persistence within a single client session

HTTP is a **stateless protocol**. This means that each HTTP request is ignorant of any data produced by requests before it - each request is made from a _blank slate_.

--

- However, app developers usually want dynamic content to be displayed in the client based on a user's prior interactions with the server.

--

- For example, a "logged in" user might see one set of content while a logged-out user might seee something totally different.

--

- The client-side storage mechanisms are generally used to hold data that is passed to the server along with every request to "remind" the server of the results of prior interactions.

--

- This way apps can _maintain state_, even when using a stateless protocol such as HTTP.

---

template: overview

## Offline data

A sophisticated app can sometimes be used (to a limited extent) even when the client is disconnected from the Internet.

--

- Client-side data storage mechanisms can be used to store any content necessary for offline use.

--

- Once the device reconnects to the Internet, this data can be uploaded to a server for more persistent storage, if desired.

---

template: overview

## Persistence across clients

In addition to maintaining state within a single client session, it is often desireable to have data persist across more than one client session.

--

- For example, a news web site would like all visitors to see the same articles each day.

--

- A single post on a social media app is often viewable by many different users.

--

- A user of a social network usually expects to see the same content regardless of whether they connect via a mobile device or a desktop.

--

- These scenarios typically require data to be stored on the server-side so that the same data can be sent to a user, regardless of which client is used.

---

template: overview

## Client-side

- Cookies
- Local storage
- Serverless databases

---

template: overview

## Server-side

- File storage
- Relational databases
- NoSQL databases
- Serverless databases

---

name: cookies

# Cookies

---

template: cookies

## Concept

Cookies are simple text _key/value pairs_ stored in a client web browser. With every request, these key value pairs are sent in the HTTP headers to the server.

--

- The lifecycle of a cookie begins when a web browser makes an HTTP request to a web server for a resource.

--

- In the response, the server can instruct the client to store a cookie by sending a `Set-Cookie` **HTTP header in its response**.

```
Set-Cookie: userid=22
```

--

- With every subsequent request to that same server, the web browser will automatically include the cookie data in its **HTTP request headers**.

```
Cookie: userid=22
```

--

- Presumably, the server uses this data to customize its subsequent responses to this client or track the usage of this particular client.

---

template: cookies

## Limitations

Cookies are _intended to be read by servers_ and have a few limitations that make their use limited.

--

- Cookies can store _text only_, storing structured data is challenging.

--

- Cookies are limited to _4 kilobytes_ per server domain.

--

- Cookie data will always be sent to the relevant server _with every request_.

--

- Cookies _expire at a given date_ specified by the server.

--

- As with all client-side technologies, it's _easy for a user to fiddle_ with cookie values.

---

name: local-storage

# Local Storage

---

template: local-storage

## Concept

Local storage is another client-side data storage mechanism that serves a different use case to cookies.

--

- _Intended to be read by the client_. Local storage is never automatically sent to the server.

--

- Only _accessed via client-side Javascript_ code.

--

- _5 megabytes_ or more of data storage (depending on the browser) per domain.

--

- _No expiration date_ - local storage can only be cleared by Javascript or by a user wiping the browser's data.

--

- Supports _only text_ data, like cookies, but easy to serialize and deserealize object data with `JSON.stringify(myObj, null, 2)` and `JSON.parse(myString)`, respectively.

---

name: serverless

# Serverless Databases

---

template: serverless

## Concept

A new(ish) breed of serverless databases provide storage facilities for both client- and server-side needs.

--

- e.g. [Google Firebase](https://firebase.google.com/), [Amazon Lambda, Aurora, and DynamoDB](https://aws.amazon.com/serverless/), [Azure Data Lake](https://azure.microsoft.com/en-us/solutions/data-lake/), and more.

--

- _simple to set up_ - no DB admin job training necessary

--

- _scalable_ - as cloud services, they operate aas virtual environments across many data centers

--

- typically offer **API clients** in a variety of popular languages - `Javascript`, `Python`, `C#` etc.

--

- handle _structured data_, like objects as well as simple unstructured data

--

- increasingly do _more than data storage_, including tasks typically requiring server logic, such as user authentication, machine learning, etc.

---

name: files

# File Storage

---

template: files

## Concept

Sometimes simple file system storage is all that is needed by an app, for example for user-generated images, audio tracks, videos, etc.

--

- Small-to-medium apps can _store files on the web server itself_. While client-side technologies are 'sandboxed' and can't access the local file system, server-side code has no such constraints.

--

- More demanding file storage needs can be met using a separate remote file storage server, such as [Amazon S3 or Elastic File System](https://aws.amazon.com/products/storage/) or [Azure Files](https://azure.microsoft.com/en-us/services/storage/files/)

--

- It is usually not worthwhile to store user-generated assets such as images, audio, or video files in a database. But _the path to those files_ can be stored in the database.

---

template: files

## Example: multer

The [multer](https://www.npmjs.com/package/multer) Express.js middleware makes handling uploaded files simple.

--

- Multer can be configured to store files directly on the web server, or integrate and send them to remote storage services, like Amazon AWS or Azure.

--

- For example, to set `multer` to store uploaded files to the web server file system, install it (`npm install --save multer`), import it (`const multer = require('multer')`), and then:

--

```javascript
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // store files into a directory named 'uploads'
    cb(null, "/uploads")
  },
  filename: function (req, file, cb) {
    // rename the files to include the current time and date
    cb(null, file.fieldname + "-" + Date.now())
  },
})

var upload = multer({ storage: storage })
```

---

template: files

## Example: multer (continued)

Once set up, any route can pass the request object through the `multer` middlware prior to handling the response.

--

- Multer will upload the files as configured and make the metadata about them available in the request object.

--

```javascript
// assuming multiple files labeled as 'files' were included in the HTTP request
router.post('/upload-route-example', upload.array('files'), (req, res) => {
  console.log( JSON.stringify(req.files, null, 2) )
  if (req.files.length) res.json( { success: true, message: 'thanks!' })
  else res.status(500).send({ success: false, message: 'Oops... something went wrong!' })
}
```

---

template: files

## Example: multer (continued)

Now, the client, for example a web browser, can allow a user to upload a file and send it to the server to be handled by this route.

--

- The web browser must display a `<form>` element to the user, with an `<input type="file" name="files">` child element - this shows the user a file picker in the interface.

--

- Once the user submits the form, the client Javascript code can use the browser's native `FormData` object to package up the form data, including any files picked by the user.

--

- The client-side Javascript can then make an asynchronous HTTP POST request to the server, sending it the data in the `FormData` object.

--

- See some simple [example code](https://github.com/axios/axios/blob/master/examples/upload/index.html) using `axios` to make the request to the server.

---

name: relational

# Relational Databases

--

## Concept

Relational databases stored data in a row/column-type format. They are essentially glorified spreadsheets.

--

- For example, data on animals might be stored as rows and columns in a **table** named `animals`, where each row represents a single record of a single animal.

--

| id  | common_name | big_or_not |           image_path |
| --- | :---------: | ---------: | -------------------: |
| 1   |   giraffe   |        big |  uploads/giraffe.jpg |
| 2   |  squirrel   |    not big | uploads/squirrel.png |

--

- Relational databases generally require the `SQL` language to send them instructions, for example to retrieve data.

--

```sql
SELECT common_name, image_path FROM animals WHERE id=2
```

---

template: relational

## CRUD

Databases, relational or not, are typically used to do one of four tasks, affectionately referred to with the acronym, **CRUD**.

--

- **C**reate - create new records (i.e. rows) in the database. Typically done using the SQL `INSERT` command.

--

- **R**ead - retrieve records from the database. Typically done using the SQL `SELECT` command.

--

- **U**pdate - modify existing records in the database. Typically done using the SQL `UPDATE` command.

--

- **D**elete - delete existing records from the database. Typically done using the SQL `DELETE` command.

--

- See some [examples of each](https://knowledge.kitchen/MySQL_table_operations).

---

template: relational

## Joins

The bane of every relational database developer's existence is the concept of **[joins](https://knowledge.kitchen/MySQL_inner_joins)**.

--

- Related records from more than one table are joined together.

--

- For example, if I want to keep track of the animals in my personal, I might have another table named `inventory` that stored each of my animals' names, and a reference to the relevant record in the `animals` table.

--

| id  | animal_id |   name |
| --- | :-------: | -----: |
| 1   |     1     |    Bob |
| 2   |     1     | Sheila |

--

- To get the full data of the animals in my personal zoo in the `inventory` table combined with the abstract animal data in the `animals` table...

--

```sql
SELECT * FROM inventory INNER JOIN animals ON inventory.animal_id = animals.id
```

---

name: mongodb

# MongoDB

--

## Concept

MongoDB is one of many increasingly-popular **NoSQL** databases that do not use SQL and do not store data in row/column format.

--

- MongoDB is a **document-oriented database**, meaning records are stored as JSON objects called 'documents'... not 'rows' as in relational databases.

--

- Documents are bundled up into groups called **collecetions**... not 'tables' as in relational databases.

--

- Documents generally hold all the information necessary to store data about a single record.... **joins** between multiple documents are possible, but frowned upon unless absolutely necessary.

---

template: mongodb

## Example document

For example, a document that represents an animal in my personal zoo might look like:

--

```javascript
{
  id: 1,
  name: 'Bob',
  type: {
    commonName: 'giraffe',
    bigOrNot: 'big',
    imagePath: 'uploads/giraffe.jpg'
  }
}
```

--

- Notice that the general data about the animal 'giraffe' is bundled up into the specific animal document about 'Bob'.... this is the conventional MongoDB way.

---

template: mongodb

## MongoDB Atlas

MongoDB offers a cloud-based database server named [Atlas](https://www.mongodb.com/cloud/atlas) with a free tier for trying it out...

--

- This can be a useful first database server.

--

- It is also possible to download and install MongoDB locally on development machines and run it on a different port than the Express.js web server.

---

template: mongodb

## Mongoose

When connecting an Express.js web server to a MongoDB server, it is wise to use [mongoose](https://www.npmjs.com/package/mongoose), a 3rd-party module.

--

- Mongoose abstracts away the details of MongDB, and provides a simple Javascript interface.

--

- See [example code](https://mongoosejs.com/).

---

template: mongodb

## Credentials

Storing database credentials in version control is a big mistake!

--

- use the [dotenv](https://www.npmjs.com/package/dotenv) module to load credentials into code from `bash` environmental variables stored in a hidden non-version-controlled file named `.env`.

---

name: conclusions

# Conclusions

--

You have seen a brief overview of various data storage mechanisms.

--

- [This example repository](https://github.com/nyu-software-engineering/data-storage-example-app) includes examples of using both Cookies and Local Storage on both the client- and server-sides.

--

- Thank you. Bye.
