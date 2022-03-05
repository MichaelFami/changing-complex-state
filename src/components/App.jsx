import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleFirstChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          onChange={handleFirstChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleLastChange}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
