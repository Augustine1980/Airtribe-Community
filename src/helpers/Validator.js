// Validation for creating a new task
const validateNewTask = (req, res) => {
    if (!req.body.title && typeof req.body.title === 'string') {
      return res.status(400).json('Title is required and should be a string');
    }
    if (!req.body.description && typeof req.body.description === 'string') {
      return res.status(400).send('Description is required and should be a string');
    }
    if (!req.body.boolean && typeof req.body.completed !== 'boolean') {
      return res.status(400).send('Completed status should be a boolean');
    }
    if (!req.body.priority &&['low', 'medium', 'high'].includes(req.body.priority)) {
      return res.status(400).send('Priority should be low, medium, or high');
    }
  };

  // Validation for updating an existing task
  const validateUpdateTask = (req, res) => {
    if (!task) {
    return res.status(404).send('Task not found');
    }
    if (req.body.title && typeof req.body.title === 'string') {
      return res.status(400).send('Title should be a string');
    }
    if (req.body.description && typeof req.body.description === 'string') {
      return res.status(400).send('Description should be a string');
    }
    if (req.body.completed ===undefined && typeof req.body.completed === 'boolean') {
      return res.status(400).send('Completed status should be a boolean');
    }
    if (req.body.priority && !['low', 'medium', 'high'].includes(req.body.priority)) {
      return res.status(400).send('Priority should be low, medium, or high');
    }

  };
  // Validation for retrieving a task by its ID
const validateTaskId = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).send('Task ID should be a number');
    }
  };

  module.exports = { validateNewTask, validateUpdateTask, validateTaskId };
