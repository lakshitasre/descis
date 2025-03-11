const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user: 'your_username', // Replace with your PostgreSQL username
    host: 'localhost',
    database: 'descis_db',
    password: 'your_password', // Replace with your PostgreSQL password
    port: 5432,
});

// API to add manufacturer
app.post('/api/manufacturer', async (req, res) => {
    const { name, product_code, description } = req.body;
    const result = await pool.query('INSERT INTO manufacturers (name, product_code, description) VALUES ($1, $2, $3) RETURNING *', [name, product_code, description]);
    res.json(result.rows[0]);
});

// API to verify product
app.get('/api/product/:code', async (req, res) => {
    const { code } = req.params;
    const result = await pool.query('SELECT * FROM manufacturers WHERE product_code = $1', [code]);
    res.json(result.rows[0]);
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});