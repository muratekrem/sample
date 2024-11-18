const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MURATekrem789',
    database: 'react_auth',
});

db.connect((err) => {
    if (err) {
        console.log('MySQL Bağlantı Hatası:', err);
    } else {
        console.log('MySQL Bağlantısı Başarılı');
    }
});

app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Kayıt sırasında bir hata oluştu', error: err });
        }
        res.status(201).json({ message: 'Kayıt başarılı!' });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ message: 'Geçersiz e-posta veya şifre' });
        }

        const user = results[0];

        if (user.password !== password) {
            return res.status(401).json({ message: 'Geçersiz e-posta veya şifre' });
        }

        res.status(200).json({ message: 'Giriş başarılı!', user });
    });
});

app.listen(PORT, () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
