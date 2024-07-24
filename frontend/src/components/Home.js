import React, { useState } from 'react';

function Home({ openProject }) {
    const [projectId, setProjectId] = useState('');

    const handleOpen = () => {
        openProject(projectId);
    };

    return (
        <div>
            <h1>Главная</h1>
            <input 
                type="text" 
                value={projectId} 
                onChange={(e) => setProjectId(e.target.value)} 
                placeholder="Введите ID проекта" 
            />
            <button onClick={handleOpen}>Открыть</button>
        </div>
    );
}

export default Home;
