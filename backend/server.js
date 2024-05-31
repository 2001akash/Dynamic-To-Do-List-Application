const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todo-app')
  .then(() => console.log('MongoDB database connection established successfully'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
