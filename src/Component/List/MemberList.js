import React from "react";
import Card from "../UI/Card/Card";
import MemberItem from "./MemberItem";

const MemberList = (props) => {
  const list = props.onList;
  return (
    <Card>
      {list.map((e) => (
        <MemberItem key={e.id} userName={e.userName} userAge={e.userAge} />
      ))}
    </Card>
  );
};

export default MemberList;