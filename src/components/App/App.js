import React from 'react';
import Server from './../../Server/Server.js';

function App() {
  const Server1 = new Server();

  Server1.getUsers()
    .then((res) => {
      console.log(res)
  });

  Server1.getPosts()
    .then((res) => {
      console.log(res)
    });

  return(
    <div>
      asdfa
    </div>
  )
}

export default App;