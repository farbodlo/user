import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";

const NewUserForm = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

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
    console.log(username);
    console.log(age);
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label>Username :</label>
        <Input type="text" onChange={usernameHandler} />
        {/* <input type="text" onChange={usernameHandler} /> */}
        <label>Age :</label>
        <Input type="number" min="0" onChange={ageHandler} />
        {/* <input type="number" min="0" onChange={ageHandler} /> */}
        <Button type="submit">Add User</Button>
        {/* <button type="submit">Add User</button> */}
      </form>
    </Card>
  );
};

export default NewUserForm;
