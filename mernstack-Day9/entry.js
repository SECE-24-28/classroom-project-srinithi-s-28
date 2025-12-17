const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Day 9 - Node.js Backend!');
});

app.get('/api/students', (req, res) => {
    const students = [
        { id: 1, name: 'John Doe', course: 'MERN Stack' },
        { id: 2, name: 'Jane Smith', course: 'Full Stack' },
        { id: 3, name: 'Bob Johnson', course: 'Web Development' }
    ];
    res.json(students);
});

app.post('/api/students', (req, res) => {
    const { name, course } = req.body;
    const newStudent = {
        id: Date.now(),
        name,
        course
    };
    res.status(201).json(newStudent);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});