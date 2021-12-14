import React from "react";
import Card from "../UI/Card";
// import NewUserForm from "./NewUserForm";
import NewUserForm2 from "./NewUserForm2";

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
      <NewUserForm2 onSave={saveUserInfo} />
    </Card>
  );
};

export default NewUser;
