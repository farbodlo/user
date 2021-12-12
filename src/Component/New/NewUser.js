import React from "react";
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
  const saveUserInfo = (prevUserInfo) => {
    const userInfo = {
      ...prevUserInfo,
      id: Math.random(),
    };
    props.onLog(userInfo)
};
  return <NewUserForm onSave={saveUserInfo} />;
};

export default NewUser;
