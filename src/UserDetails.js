import React, { useEffect, useState } from 'react';
import NewUser from './Newuser';

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

 
  useEffect(() => {
    fetch('https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };


  const updateUser = (updatedUser) => {
    setUsers((prevUsers) => 
      prevUsers.map((user) => (user.username === updatedUser.username ? updatedUser : user))
    );
    setEditingUser(null); 
  };

  
  const deleteUser = (username) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.username !== username));
  };

  
  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  return (
    <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
      {}
      <NewUser addUser={addUser} updateUser={updateUser} editingUser={editingUser} />

      {}
      <table className="table table-hover" style={{ border: '3px solid black', marginTop: '20px'}}>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Username</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Marital Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.username}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.age}</td>
              <td>{user.marital_status}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEditClick(user)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => deleteUser(user.username)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
