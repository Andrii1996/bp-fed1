import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Edit ({editUser, deleteUser, userList}) {
  const {id} = useParams();
  const idx = userList.findIndex(el => el._id === id)
  const [fname, setfName] = useState(userList[idx].fname);
  const [email, setEmail] = useState(userList[idx].email);
  const [phone, setPhone] = useState(userList[idx].phone);
  const [address, setAddress] = useState(userList[idx].address);
  const router = useHistory();

  const handleNameChange = (event) => {
    setfName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editUser(fname, email, phone, address, id);
    router.push('/');
  };
  
  return (
    <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter product name"
          required
          value={fname}
          onChange={handleNameChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Enter email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Enter phone"
          required
          value={phone}
          onChange={handlePhoneChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Enter address"
          required
          value={address}
          onChange={handleAddressChange}
        />
          <button
            type="submit"
            className="button"
          >
            Save
          </button>
          <button
            type="button"
            className="button"
            onClick={() => deleteUser(userList._id)}
          >
            Delete
          </button>
    </form>
  )
}

export default Edit;