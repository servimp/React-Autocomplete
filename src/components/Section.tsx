import React, { ReactNode, useEffect, useState } from "react";

type SectionProps = {
  title?: string;
  children?: ReactNode;
};

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [noRecordsFound, setNoRecordsFound] = useState<boolean>(false);


// For production the fetchUsers function needs to include the search query parameter
  const fetchUsers = async (tpage: number) => {
    const res = await fetch("https://gorest.co.in/public/v2/users?page=" + tpage);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers(1);
      setUsers(data); // Set the state to the fetched data
    };
    getUsers();
  }, []);

 // In production handleChange will call fetchUsers directly
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  
    if (users?.length > 0) {
      const filtered = await filterUsers(value);
      setFilteredUsers(filtered);
    }
  };
  
  // filterUsers not needed in production as result come filtered from the API
  const filterUsers = async (value: string): Promise<User[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = users.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );
        resolve(filtered);
      }, 200); // Simulate asynchronous call
    });
  };

  const handleItemClick = (userName: string) => {
    setSelectedUser(userName);
    setFilteredUsers([]);
    setInputValue('');
  };
  

  useEffect(() => {
    if (inputValue && filteredUsers.length === 0) {
      setNoRecordsFound(true);
    } else {
      setNoRecordsFound(false);
    }
  }, [inputValue, filteredUsers]);

  return (
    <section>
      <h2>{title}</h2>
      <input
        type="text"
        className="input"
        value={inputValue}
        placeholder="Enter text"
        onChange={handleChange}
      />
      {inputValue && filteredUsers.length > 0 && (
        <div className="autocomplete">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="autocomplete-item"
              onClick={() => handleItemClick(user.name)}
            >
             <>
  {user.name.slice(0, user.name.toLowerCase().indexOf(inputValue.toLowerCase()))}
  <span className="highlight">
    {user.name.slice(
      user.name.toLowerCase().indexOf(inputValue.toLowerCase()),
      user.name.toLowerCase().indexOf(inputValue.toLowerCase()) + inputValue.length
    )}
  </span>
  {user.name.slice(user.name.toLowerCase().indexOf(inputValue.toLowerCase()) + inputValue.length)}
</>

            </div>
          ))}
        </div>
      )}
      {noRecordsFound && <div className="no-records">No records found</div>}
      {selectedUser && <div className="selected-user">{selectedUser}</div>}
    </section>
  );
};

export default Section;