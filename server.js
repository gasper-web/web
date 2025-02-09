const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/register', (req, res) => {
    const { fullname, regNumber, sex, email, region, district, password } = req.body;

    if (!fullname || !regNumber || !sex || !email || !region || !district || !password) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    res.json({ message: 'Registration successful!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
