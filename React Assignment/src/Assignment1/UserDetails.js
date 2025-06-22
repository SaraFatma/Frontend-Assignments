import React from 'react';

function UserDetails({ age, email }) {
  return (
    <div>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default UserDetails;
