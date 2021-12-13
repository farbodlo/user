import React from "react";
import Card from "../UI/Card/Card";
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
  const saveUserInfo = (prevUserInfo) => {
    const userInfo = {
      ...prevUserInfo,
      id: Math.random(),
    };
    props.onLog(userInfo);
  };
  return (
    <Card>
      <NewUserForm onSave={saveUserInfo} />
    </Card>
  );
};

export default NewUser;
