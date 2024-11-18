import React, { useState } from 'react';
import Navbar from "./Navbar";
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Loading durumu
    const [error, setError] = useState(null); // Hata durumu

    const handleSignup = async () => {
        // Boş alan kontrolü
        if (!email || !password) {
            alert('E-posta ve şifre alanlarını doldurduğunuzdan emin olun.');
            return;
        }

        setLoading(true);  // Yükleme durumu başlatılıyor
        setError(null);     // Önceki hatayı temizle

        try {
            const response = await axios.post('http://localhost:5000/signup', { email, password });
            alert(response.data.message);
            setEmail('');
            setPassword('');
        } catch (error) {
            setError(error.response ? error.response.data.message : "Bir hata oluştu");
            alert(error.response ? error.response.data.message : "Bir hata oluştu");
        } finally {
            setLoading(false);  // Yükleme durumu bitiyor
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ display: "grid", justifyContent: "center", gap: "8px" }}>
                <h2 style={{ display: "flex", justifyContent: "center" }}>Sign Up</h2>
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
                <button onClick={handleSignup} disabled={loading}>
                    {loading ? 'Yükleniyor...' : 'Sign Up'}
                </button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
        </div>
    );
};

export default Signup;
