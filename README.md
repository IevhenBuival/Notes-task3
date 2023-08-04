# Task-3 Notes endpoints

Here we have Rest API for Table Notes that stored in cloud Atlas Mongo DB

link to api: https://notesapi-task3.azurewebsites.net/api
I am using free Azure plan so first time loading may be about few minuts,

body example for POST and PATCH:

{
"title": "Example note",
"content" :"this is my new with date 05/05/2015",
"category" : "Task",
"dates" :"05/05/2015",
"archived" :false
}

all field in body must have

## Endpoints

### Create a note object:

POST https://notesapi-task3.azurewebsites.net/api/notes

### Remove item:

DELETE https://notesapi-task3.azurewebsites.net/api/notes/:id

### Edit item:

PATCH https://notesapi-task3.azurewebsites.net/api/notes/:id

### Retrieve item:

GET https://notesapi-task3.azurewebsites.net/api/notes/:id

### Get all notes:

GET https://notesapi-task3.azurewebsites.net/api/notes

### Get aggregated data statistics about number of archived and active notes by category:

GET https://notesapi-task3.azurewebsites.net/api/notes/stats

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
