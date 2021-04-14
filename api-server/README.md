## Description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Instructions and Considerations

- You MUST have Docker globally installed on your machine
- Just get inside the `/reign-test` folder and type the command: `docker-compose up` (it'll automatically fetch the docker images and install everything necessary to test the application)

## The Server-Side component <<API>> (Nest.js):

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
- Provides a "refresh" button to populate the Database
- It can be used to delete the posts one by one
