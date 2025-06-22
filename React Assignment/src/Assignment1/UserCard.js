import React from 'react';
import UserDetails from './UserDetails';

function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem', width: '300px' }}>
      <h2>{user.name}</h2>
      <UserDetails age={user.age} email={user.email} />
    </div>
  );
}

export default UserCard;
