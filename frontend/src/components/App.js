import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Home from './Home';
import NewProject from './NewProject';
import Project from './Project';

function App() {
    const [projects, setProjects] = useState([]);
    const history = useHistory();

    const openProject = (projectId) => {
        if (!projects.includes(projectId)) {
            setProjects([...projects, projectId]);
        }
        history.push(`/project/${projectId}`);
    };

    return (
        <Router>
            <div className="app">
                <nav className="fixed-menu">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/new">Создать новый проект</Link></li>
                        {projects.map((projectId) => (
                            <li key={projectId}><Link to={`/project/${projectId}`}>Проект №{projectId}</Link></li>
                        ))}
                    </ul>
                </nav>
                <main className="content">
                    <Switch>
                        <Route exact path="/" component={() => <Home openProject={openProject} />} />
                        <Route path="/new" component={NewProject} />
                        <Route path="/project/:id" component={Project} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
