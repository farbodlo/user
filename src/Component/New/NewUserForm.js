import React, { useState } from "react";

const NewUserForm = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState();

  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const userInfo = {
      userName: username,
      userAge: age,
    };
    setUserName("");
    setAge("");
    props.onSave(userInfo);
  };

  return (
    <form onSubmit={addUserHandler}>
      <h4>Username :</h4>
      <input type="text" onChange={usernameHandler} />
      <h4>Age :</h4>
      <input type="number" min="0" onChange={ageHandler} />
      <p>
        <button type="submit">Add User</button>
      </p>
    </form>
  );
};

export default NewUserForm;
