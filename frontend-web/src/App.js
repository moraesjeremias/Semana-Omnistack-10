import React, { useState, useEffect } from 'react';
import Api from './services/api';
import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

import UserItem from './components/UserList';
import UserForm from './components/Form';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await Api.get('/users');

      setUsers(response.data);
    }
    loadUsers();
  }, []);

    async function handleAddUser(data) {
      const response = await Api.post('/users', data);

      setUsers([...users, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <UserForm onSubmit={handleAddUser} />
      </aside>
      <main>
        <ul>
          {users.map(user => (
            <UserItem key={user._id} user={user} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
