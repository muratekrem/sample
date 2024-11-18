import React, { useState } from 'react';
import Navbar from "./Navbar";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        if (!email || !password) {
            alert('E-posta ve şifre alanlarını doldurduğunuzdan emin olun.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            alert(response.data.message);
            localStorage.setItem('userEmail', email);
            window.location.href = '/homepage'; 
        } catch (error) {
            setError(error.response ? error.response.data.message : "Bir hata oluştu");
            alert(error.response ? error.response.data.message : "Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ display: "grid", justifyContent: "center", gap: "8px" }}>
                <h2 style={{ display: "flex", justifyContent: "center" }}>Login</h2>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button onClick={handleLogin} disabled={loading}>
                    {loading ? 'Yükleniyor...' : 'Login'}
                </button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
        </div>
    );
};

export default Login;
