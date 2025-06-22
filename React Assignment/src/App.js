import React from 'react';
import UserCard from './Assignment1/UserCard';
import Counter from './Assignment2/Counter';
import LiveInput from './Assignment2/LiveInput';
import VisibilityToggle from './Assignment2/VisibilityToggle';

function App() {
  const user = {
    name: 'Sara Fatma',
    age: 21,
    email: 'sara.fatma@example.com',
  };

  return (
    <div className="App">

      <h1>Assignment 1: User Profile</h1>
      <UserCard user={user} />

       <hr />

      <h1>Assignment 2: Interactive Components</h1>
      <Counter />
      <LiveInput />
      <VisibilityToggle />


    </div>
  );
}

export default App;
