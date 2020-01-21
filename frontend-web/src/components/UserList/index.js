import React from 'react';
import './styles.css';

function UserItem({ user }) {
    return(
        <li className="dev-item">
            <header>
              <img src={user.avatar_url} alt={user.name} />
              <div className="user-info">
                <strong>{user.github_username}</strong>
                <span>{user.techs.join(', ')}</span>
              </div>
            </header>
            <p>{user.bio}</p>
            <a href={`https://github.com/${user.github_username}`}>Acesse meu perfil</a>
          </li>
    );
}

export default UserItem;