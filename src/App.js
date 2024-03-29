import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

import { Fragment } from "react";
import { useState } from "react";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, college: uCollege, id: Math.random.toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
};

export default App;
