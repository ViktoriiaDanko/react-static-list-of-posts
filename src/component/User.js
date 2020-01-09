import React from 'react';

const User = ({user}) => {
  const {
    name, email, adress,
  } = user;

  return (
    <div className="user">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{adress}</p>
    </div>
  )
};

export default User;