import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [userNameIsValid, setUserNameIsValid] = useState(true);
  const [ageIsValid, setAgeIsValid] = useState(true);
  const [userNameContetnError, setUserNameContentError] = useState("");
  const [ageContentError, setAgeContentError] = useState("");

  const usernameHandler = (event) => {
    if (event.target.value.length > 0) {
      setUserNameIsValid(true);
      setUserName(event.target.value);
    }
  };
  const ageHandler = (event) => {
    if (event.target.value.length > 0) {
      setAgeIsValid(true);
      setAge(event.target.value);
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0) {
      setUserNameIsValid(false);
      setUserNameContentError("Username must be entered!");
      return;
    } else {
      setUserNameIsValid(true);
      setUserNameContentError("");
    }
    if (age.trim().length === 0) {
      setAgeIsValid(false);
      setAgeContentError("Age must be entered!");
      return;
    } else {
      setAgeIsValid(true);
      setAgeContentError("");
    }
    if (+age < 1) {
      setAgeIsValid(false);
      setAgeContentError("Age can not be 0 or negative!");
      return;
    } else setAgeIsValid(true);
    const userInfo = {
      userName: userName,
      userAge: age,
    };
    setUserName("");
    setAge("");
    props.onSave(userInfo);
  };

  return (
    <form onSubmit={addUserHandler}>
      <div>
        <label
          className={`${styles["username"]} ${
            !userNameIsValid && styles.invalid
          }`}
        >
          Username :
        </label>
        <Input
          type="text"
          value={userName}
          onChange={usernameHandler}
          className={!userNameIsValid && "invalid"}
        />
        {userNameContetnError && <p> {userNameContetnError} </p>}
      </div>
      <div>
        <label className={`${styles["age"]} ${!ageIsValid && styles.invalid}`}>
          Age :
        </label>
        <Input
          type="number"
          value={age}
          onChange={ageHandler}
          className={!ageIsValid && "invalid"}
        />
        {ageContentError && <p> {ageContentError} </p>}
      </div>
      <Button
        type="submit"
      >
        Add User
      </Button>
    </form>
  );
};

export default NewUserForm;
