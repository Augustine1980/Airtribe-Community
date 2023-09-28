        const express = require('express');
        const bodyParser = require('body-parser');
        const app = express();
        const { validateNewTask, validateUpdateTask, validateTaskId }  = require('./helpers/Validator');
        app.use(bodyParser.json());

        app.listen(3000, () => {
        console.log('Server running on port 3000');
        });
        let tasks = [
            {
                "id": 1,
                "title": "Task1",
                "description": "This is a new task",
                "completed": false,
                "priority": "medium"
            }
        ];
        app.get('/tasks', (req, res) => {

          res.json(tasks);
        });
        app.get('/tasks/:id', (req, res) => {
          const task = tasks.find(t => t.id === parseInt(req.params.id));
          if (!task) return res.status(404).send('Task not found');
          res.json(task);
        });

        app.get('/tasks/:id', (req, res) => {
          const task = tasks.find(t => t.id === parseInt(req.params.id));
          if (!task) return res.status(404).send('Task not found');
          res.json(task);
        });

        app.post('/tasks', (req, res) => {
        // Input validation
        validateNewTask(req ,res);
        const newTask = {
          "id": tasks.length + 1,
          "title": req.body.title,
          "description": req.body.description,
          "completed": req.body.completed || false,
          "priority": req.body.priority || 'medium'
        };
        tasks.push(newTask);
        console.log(tasks);
        res.json(tasks);
        });

      app.put('/tasks/:id', (req, res) => {

        const task = tasks.find(t => t.id === parseInt(req.params.id));
        validateUpdateTask(task);


        // Update task
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.completed = req.body.completed || task.completed;
        task.priority = req.body.priority || task.priority;
        res.json(tasks);
        });

      app.delete('/tasks/:id', (req, res) => {
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
        if (taskIndex === -1) return res.status(404).send('Task not found');

        const deletedTask = tasks.splice(taskIndex, 1);
        res.json(deletedTask);
        });


      app.get('/tasks/priority/:level', (req, res) => {
        const filteredTasks = tasks.filter(t => t.priority === req.params.level);
        res.json(filteredTasks);
      });

