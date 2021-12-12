import React, { useState } from "react";
import MemberList from "./Component/List/MemberList";
import NewUser from "./Component/New/NewUser";

function App() {
  const [user, setUser] = useState([]);
  const userHandler = (newUser) => {
    setUser([...user, newUser]);
  };
  return (
    <div>
      <NewUser onLog={userHandler} />
      <MemberList onList={user} />
    </div>
  );
}

export default App;
