import React, { useState, useEffect } from "react";

import UserCard from "./UserCard";

import "./App.scss";

export default function App() {
  const [users, setUsers] = useState([]);
  const [shownUsers, setShownUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        setShownUsers(data);
      });
  }, []);

  const handleChange = (event) => {
    setShownUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const showUsers = () => {
    return shownUsers.map((user) => <UserCard key={user.id} user={user} />);
  };

  return (
    <div id="app">
      <h1>User directory</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search for User..."
      />
      <div className="userWrapper">
        {shownUsers.length > 0 ? showUsers() : <h1>User not found</h1>}
      </div>
    </div>
  );
}
