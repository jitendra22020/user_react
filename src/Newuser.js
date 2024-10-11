import React, { useState, useEffect } from 'react';

function Newuser({ addUser, updateUser, editingUser }) {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');

  
  useEffect(() => {
    if (editingUser) {
      setShowForm(true);
      setUsername(editingUser.username);
      setFirstName(editingUser.first_name);
      setLastName(editingUser.last_name);
      setAge(editingUser.age);
      setMaritalStatus(editingUser.marital_status);
    }
  }, [editingUser]);

  
  const handleNewUserClick = () => {
    setShowForm(!showForm);
    resetForm();
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      first_name: firstName,
      last_name: lastName,
      age,
      marital_status: maritalStatus,
    };

    if (editingUser) {
      updateUser(newUser);
    } else {
      addUser(newUser); 
    }

    resetForm();
    setShowForm(false); 
  };

  
  const resetForm = () => {
    setUsername('');
    setFirstName('');
    setLastName('');
    setAge('');
    setMaritalStatus('');
  };

  return (
    <div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="button" onClick={handleNewUserClick}>
          {editingUser ? 'Edit User' : 'New User'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={!!editingUser} // Disable username field when editing
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
            <select
              className="form-select"
              id="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success">
            {editingUser ? 'Update User' : 'Add User'}
          </button>
        </form>
      )}
    </div>
  );
}

export default Newuser;
