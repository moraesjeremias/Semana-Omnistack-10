import React, { useState ,useEffect } from "react";
import Api from './services/api';
import "./global.css";
import "./App.css";
import "./sidebar.css";
import "./main.css";

function App() {

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      }, (err) =>{
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  });

  async function handleCreateUser(e){
    e.preventDefault();

    const response = await Api.post('/users', {
      github_username,
      techs,
      latitude,
      longitude,
    });
    
    setGithubUsername('');
    setTechs('');
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleCreateUser}>
          <div className="input-block">
            <label htmlFor="github_username">Github username</label>
            <input 
            type="string"
            name="github_username" 
            id="github_username" 
            value={github_username}
            onChange={e=> setGithubUsername(e.target.value)}
            required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Languages and Frameworks</label>
            <input 
            type="string"
            name="tech" 
            id="techs" 
            value={techs}
            onChange={e=> setTechs(e.target.value)}
            required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              value={latitude}
              onChange={e=> setLatitude(e.target.value)}
              required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              value={longitude} 
              onChange={e=> setLongitude(e.target.value)}
              required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/42787540?v=4" alt="_user_avatar" />
              <div className="user-info">
                <strong>Jeremias Moraes</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>CTO uCook</p>
            <a href="https://github.com/moraesjeremias">Acesse meu perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/42787540?v=4" alt="_user_avatar" />
              <div className="user-info">
                <strong>Jeremias Moraes</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>CTO uCook</p>
            <a href="https://github.com/moraesjeremias">Acesse meu perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/42787540?v=4" alt="_user_avatar" />
              <div className="user-info">
                <strong>Jeremias Moraes</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>CTO uCook</p>
            <a href="https://github.com/moraesjeremias">Acesse meu perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/42787540?v=4" alt="_user_avatar" />
              <div className="user-info">
                <strong>Jeremias Moraes</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>CTO uCook</p>
            <a href="https://github.com/moraesjeremias">Acesse meu perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
