// Create web server using express.js
// Create routes for comments
// http://localhost:3000/comments
// http://localhost:3000/comments/:id

const express = require('express');
const router = express.Router();

const comments = [
    { id: 1, comment: 'comment 1' },
    { id: 2, comment: 'comment 2' },
    { id: 3, comment: 'comment 3' },
    { id: 4, comment: 'comment 4' },
    { id: 5, comment: 'comment 5' },
];

// GET comments
router.get('/', (req, res) => {
    res.send(comments);
});

// GET comments by id
router.get('/:id', (req, res) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});

// POST comments
router.post('/', (req, res) => {
    const comment = {
        id: comments.length + 1,
        comment: req.body.comment,
    };
    comments.push(comment);
    res.send(comment);
});

// PUT comments
router.put('/:id', (req, res) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');

    comment.comment = req.body.comment;
    res.send(comment);
});

// DELETE comments
router.delete('/:id', (req, res) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');

    const index = comments.indexOf(comment);
    comments.splice(index, 1);

    res.send(comment);
});

module.exports = router;