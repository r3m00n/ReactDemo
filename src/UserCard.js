import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="userCard">
      <img
        src={`https://picsum.photos/seed/${user.username}/300/150`}
        alt="bg"
      />
      <div className="bottom">
        <img
          src={`https://i.pravatar.cc/150?u=${user.username}/100`}
          alt="profile"
        />
        <h2>{user.name}</h2>
        <h3>{user.address.city}</h3>
      </div>
    </div>
  );
}

// https://i.pinimg.com/originals/61/ec/e4/61ece4ae9f080f4da3945ce800fd5643.jpg
