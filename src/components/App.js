import './App.css';
import Card from './Card/Card';
import users from '../db/db.json';

function App() {
  return ( 
        <div className="wrapper">
          {users.map(user => (<Card
              key={user.id} 
              avatar = {user.avatar}
              name = {user.name}
              surname = {user.surname}
              age = {user.age}
            />
          ))}
        </div>
  );
}

export default App;