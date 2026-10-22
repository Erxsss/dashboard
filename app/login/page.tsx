import { ChangeEvent, useState } from "react";

export default function HOME() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setInput((prev) => ({ ...prev, email: value }));
    }
  };
  return <div></div>;
}
