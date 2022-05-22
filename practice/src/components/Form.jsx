import React from "react";

const initState = {
  name: "",
  email: "",
  password: ""
};

function Form() {
  const [state, SetState] = React.useState(initState);

  const { name, email, password } = state;
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    SetState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <br />
        <input type="text" name="email" value={email} onChange={handleChange} />
        <br />
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export { Form };
