const router = require('express').Router();
let Task = require('../models/task.model');

// Get all tasks
router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new task
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description || '';
    const status = 'Pending';

    const newTask = new Task({ title, description, status });

    newTask.save()
        .then(() => res.json('Task added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update task status
router.route('/update/:id').patch((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.status = req.body.status;
            if (req.body.status === 'Completed') {
                task.timestamp = new Date();
            }

            task.save()
                .then(() => res.json('Task updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
