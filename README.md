# Task-3 Notes endpoints

Here we have Rest API for Table Notes that stored in cloud Atlas Mongo DB

link to api:

## Endpoints

### Create a note object:

POST /notes

### Remove item:

DELETE /notes/:id

### Edit item:

PATCH /notes/:id

### Retrieve item:

GET /notes/:id

### Get all notes:

GET /notes

### Get aggregated data statistics about number of archived and active notes by category:

GET /notes/stats

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
