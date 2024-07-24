import React from 'react';
import { useParams } from 'react-router-dom';

function Project() {
    const { id } = useParams();

    return (
        <div>
            <h1>Проект №{id}</h1>
            <p>Детали проекта №{id}.</p>
        </div>
    );
}

export default Project;
