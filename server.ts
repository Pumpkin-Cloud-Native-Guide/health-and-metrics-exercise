import express from 'express';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: 'Hello World!' });
});

/**
 * TODO 1
 *
 * Add health status endpoint.
 */

/**
 * TODO 2
 *
 * Add metrics endpoint.
 */

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
