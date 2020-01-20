import React, { useState } from "react";
import "./global.css";
import "./App.css";
import "./sidebar.css";
import "./main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmFor="github_username">Github username</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmFor="techs">Languages and Frameworks</label>
            <input name="tech" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/42787540?v=4" alt="_user_avatar" srcset=""/>
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
              <img src="https://avatars3.githubusercontent.com/u/42787540?v=4" alt="_user_avatar" srcset=""/>
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
              <img src="https://avatars3.githubusercontent.com/u/42787540?v=4" alt="_user_avatar" srcset=""/>
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
              <img src="https://avatars3.githubusercontent.com/u/42787540?v=4" alt="_user_avatar" srcset=""/>
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
