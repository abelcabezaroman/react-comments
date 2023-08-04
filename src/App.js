import React, { useState } from 'react';
import './App.css';
import List from './components/List/List';
import UserManager from './components/UserManager/UserManager';

const defaultList = [
  {
    name: "Cuaderno",
    qty: 2,
    comments: []
  }, {
    name: "Cuadernillo",
    qty: 2,
    comments: [
      { text: "asdasdads", user: "admin" },
      { text: "asdasdads", user: "user" },
      { text: "asdasdads", user: "admin" },
      { text: "asdasdads", user: "admin" },
      { text: "asdasdads", user: "user" },
    ]
  }
]

export const GlobalContext = React.createContext();
function App() {
  const [user, setUser] = useState("admin")
  return (
    <div className="App">
      <div className="App-header">
        <GlobalContext.Provider value={{ user, setUser }}>

          <UserManager />
          <List data={defaultList} />

        </GlobalContext.Provider>
      </div>
    </div>
  );
}

export default App;
