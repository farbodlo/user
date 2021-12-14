import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./NewUserForm.module.css";
import ModalError from "./ModalError";

const NewUserForm2 = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [errorModal, setErrorModal] = useState("");
  const [showError, setShowError] = useState(false);

  const usernameHandler = (event) => {
    if (event.target.value.length > 0) {
      setUserName(event.target.value);
    }
  };
  const ageHandler = (event) => {
    if (event.target.value.length > 0) {
      setAge(event.target.value);
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const error = { type: "", content: "" };
    if (userName.trim().length === 0) {
      error.type = "Username Error!";
      error.content = "Username must be entered!";
      setErrorModal(error);
      return;
    }
    if (age.trim().length === 0) {
      error.type = "Age Error!";
      error.content = "Age must be entered!";
      setErrorModal(error);
      return;
    }
    if (+age < 1) {
      error.type = "Age Error!";
      error.content = "Age can not be 0 or negative!";
      setErrorModal(error);
      return;
    } else setErrorModal("")
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
        <label className={`${styles["username"]}`}>Username :</label>
        <Input type="text" value={userName} onChange={usernameHandler} />
      </div>
      <div>
        <label className={`${styles["age"]}`}>Age :</label>
        <Input type="number" value={age} onChange={ageHandler} />
      </div>
      <Button type="submit" onClick={() => setShowError(true)}>
        Add User
      </Button>
      {errorModal && (
        <ModalError
          onError={errorModal}
          show={showError}
          onClose={() => setShowError(false)}
        />
      )}
    </form>
  );
};

export default NewUserForm2;
