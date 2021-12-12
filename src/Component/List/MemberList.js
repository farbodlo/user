import React from "react";
import MemberItem from "./MemberItem";

const MemberList = (props) => {
  const list = props.onList;
  return (
    <div>
      {list.map((e) => (
        <MemberItem key={e.id} userName={e.userName} userAge={e.userAge} />
      ))}
    </div>
  );
};

export default MemberList;