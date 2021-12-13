import React from "react";
import Item from "../UI/Item";

const MemberItem = (props) => {
  return (
    <Item>
      <span>{props.userName}</span>
      <span>{props.userAge} years old</span>
    </Item>
  );
};

export default MemberItem;
