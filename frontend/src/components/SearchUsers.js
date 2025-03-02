import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const SearchUsers = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Users..."
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUsers;
