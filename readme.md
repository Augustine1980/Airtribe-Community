# Task Manager API

![Project Preview]

## Overview

The Task Manager API is a powerful and user-friendly tool for managing tasks efficiently. It provides a set of RESTful endpoints that allow you to create, read, update, and delete tasks, making it a valuable asset for personal and professional task management.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)

## Features

- Create new tasks with titles, descriptions, priorities, and completion status.
- Retrieve a list of all tasks.
- Retrieve individual tasks by their unique IDs.
- Update task details, including title, description, priority, and completion status.
- Delete tasks by their unique IDs.
- Filter tasks by priority level.

## Installation

To get started with the Task Manager API, follow these simple steps:

npm install

npm start

mkdir task-manager-api
cd task-manager-api
npm init -y
npm install express body-parser

Usage

API Endpoints

GET /tasks: Retrieve a list of all tasks.

GET /tasks/:id: Retrieve an individual task by its unique ID.

POST /tasks: Create a new task by providing a JSON request body with title, description, priority, and completion status.

Tesing using POSTMAN use the following

curl --location --request POST 'http://localhost:3000/tasks' \ --header 'Content-Type: application/json' \ --data-raw '{ "title": "New Task","description":"This is a new task", "completed": false,"priority": "medium"}'

PUT /tasks/:id: Update an existing task by providing a JSON request body with the fields you want to modify.

DELETE /tasks/:id: Delete a task by its unique ID.

GET /tasks/priority/:level: Filter tasks by priority level (e.g., high, medium, low).

Clone the repository to your local machine:

   ```bash
   https://github.com/Augustine1980/task-manager-api
