
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://grazy.pythonanywhere.com/test/');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div className="card-container">
            {data.map((item) => (
                <Card key={item.id} title={item.title} description={item.description} />
            ))}
        </div>
    );
};

export default App;

