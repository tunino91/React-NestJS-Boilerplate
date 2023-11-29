import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";

export interface User {
  id: number;
  name: string;
}

export function Home() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [filteredUser, setFilteredUser] = useState({ name: "" });

  function handleCreateUser() {
    fetch("/api/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name: "Batus" }),
    })
      .then(function (res) {
        return res.json();
      })
      .then((val) => {
        console.log("returned val: ", val);
        setUsers(val);
      })
      .catch(function (res) {
        console.log(res);
      });
  }

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((answer) => {
        return setUsers(answer);
      });
    fetch("/api/users/1")
      .then((res) => {
        return res.json();
      })
      .then((a) => {
        setId(a.id);
        setName(a.name);
      });
    fetch("/api/users/queryParams?name=Tuna")
      .then((res) => {
        return res.json();
      })
      .then((a) => {
        console.log("returned filtered user: ", a);
        setFilteredUser(a);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h4>All Users:</h4>
      {users.map((u: User) => (
        <h4>{u.name}</h4>
      ))}
      <h4>Users with ID: 1</h4>
      <h4>ID: {id}</h4>
      <h4>Name: {name}</h4>
      <h4>Filtered User:</h4>
      <h4>{filteredUser?.name}</h4>
      <button onClick={handleCreateUser}>Create User</button>
    </>
  );
}
