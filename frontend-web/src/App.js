import React, { useState ,useEffect } from "react";
import Api from './services/api';
import "./global.css";
import "./App.css";
import "./sidebar.css";
import "./main.css";

function App() {
  const [users, setUsers] = useState([]);
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
  }, []);

  useEffect(() => {
    async function loadUsers(){
      const response = await Api.get('/users');

      setUsers(response.data);
    }

    loadUsers();
  }, []);

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
    setUsers([...users, response.data]);

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
          {users.map(user =>(
          <li key={user._id} className="dev-item">
            <header>
              <img src={user.avatar_url} alt={user.name} />
              <div className="user-info">
                <strong>{user.github_username}</strong>
                <span>{user.techs.join(', ')}</span>
              </div>
            </header>
            <p>{user.bio}</p>
            <a href={`https://github.com/${github_username}`}>Acesse meu perfil</a>
          </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
