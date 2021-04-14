# MongoDB + Nest.js + React.js Full Stack App

## Description

This is a FullStack web application built using MongoDB, Nest.js and React.js.

It has two separate components: the Server and the Client.

The server takes care of pulling the data into the database and expose an API for the React client. The client renders a web page that lists the articles in chronological order.

## Installation instructions and Considerations

- You MUST have Docker (v.17.12.0+) globally installed on a machine that runs on any linux-based OS (tested on Ubuntu 19.04)

- On the command line interface (CLI), just go to the `/reign-test` folder and type the command: `docker-compose up` (it'll automatically build the docker images for the client and server component, and fetch the mongoDB image and install everything necessary to run the application)

## Running the app

- The `docker-compose up` command automatically starts all the Docker containers created, so no need to manually start each service

- Open your web browser and type on the search bar: http://localhost:80, you'll get access to the client-side interface of the application

## The Server-Side component-API (Nest.js):

- Every hour, it connects to the "HackerNews" public API and fetches all the Nodejs posts available

- The fetched data is normalized to follow the schema set with Mongoose on a Mongo Database

- Posts are sorted by date (date is formatted as well)

- "Deleted" posts through the Client Interface won't be shown again (even if the HackerNews API continues providing them)

### Routes:

Get all posts:
`/posts`

Delete a post:
`/posts/delete?postid=<postid>`

Refresh posts (Manually tell the Nest.js API to connect to the HN public API and fetch data):
`/posts/refresh`

## The Client-Side component (React.js):

- It requests data from the server-side component (Nest.js API)

- It provides a "refresh" button to "force" a request of the most recent HackerNews on Node.js (Loading time may vary, depending on your internet connection and machine capabilities)

- The interface includes a "trash" button to easily delete the posts we don't want to be shown again

## Pending:

- Include some config files, to avoid hard-coded API routes and Database Credentials

- Probably use SSE to improve the client's refresh process when forcing data fetch through the interface's button
