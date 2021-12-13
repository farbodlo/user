import React from "react";
import Card from "../UI/Card/Card";

const MemberItem = (props) => {
  return (
    <Card>
      <div>
        <label>Username :</label>
        <span>{props.userName}</span>
      </div>
      <div>
        <label>Age :</label>
        <span>{props.userAge} years old</span>
      </div>
    </Card>
  );
};

export default MemberItem;
