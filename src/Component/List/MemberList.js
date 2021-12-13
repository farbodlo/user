import React from "react";
import List from "../UI/List";
import MemberItem from "./MemberItem";

const MemberList = (props) => {
  const list = props.onList;
  return (
    <List>
      {list.map((e) => (
        <MemberItem key={e.id} userName={e.userName} userAge={e.userAge} />
      ))}
    </List>
  );
};

export default MemberList;
