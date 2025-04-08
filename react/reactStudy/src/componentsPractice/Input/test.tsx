import { useState } from "react";

export default function EditProfile() {
  const [name, setName] = useState("JOHN");
  const [lastName, setLastName] = useState("cal");

  const [isNone, setIsNone] = useState(true);

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsNone((prev) => !prev);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    func: (value: string) => void
  ) => {
    const theValue = e.target.value;
    func(theValue);
  };

  return (
    <form>
      <label>
        First name: <b>{name}</b>
        <input
          onChange={(e) => handleChange(e, setName)}
          defaultValue={name}
          style={{ display: isNone ? "none" : "block" }}
        />
      </label>
      <label>
        Last name: <b>{lastName}</b>
        <input
          onChange={(e) => handleChange(e, setLastName)}
          defaultValue={lastName}
          style={{ display: isNone ? "none" : "block" }}
        />
      </label>
      <button onClick={handleOnClick} type="submit">
        Edit Profile
      </button>
      <p>
        <i>Hello, Jane Jacobs!</i>
      </p>
    </form>
  );
}
