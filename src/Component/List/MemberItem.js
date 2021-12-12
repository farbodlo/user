import React from "react";

const MemberItem = (props) => {
  return (
    <div>
      <h4>Username :</h4>
      <p>{props.userName}</p>
      <h4>Age llllllllllllllll:</h4>
      <p>{props.userAge} years old</p>
    </div>
  );
};

export default MemberItem;
