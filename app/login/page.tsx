import { ChangeEvent, useState } from "react";

export default function HOME() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setInput((prev) => ({ ...prev, email: value }));
    } else {
      setInput((prev) => ({ ...prev, password: value }));
    }
  };
  const login = async() => {
    const res = await fetch("/api/user")
  };
  return (
    <div>
      <input type="text" value={input.email} />
      <input type="password" value={input.password} />
    </div>
  );
}
