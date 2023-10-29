import { useState } from "react";
import { API_URL } from "../utils/constantes";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, error, data } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => axios.post(`${API_URL}/login`, { email, password })
      .then((res) => console.log(res.data[0]))
      .catch((err) => {
        throw new Error(err.response.data.message);
      })
    ,
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    mutate();
  };
  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl isRequired id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" onChange={handleOnChange} />
        <FormHelperText>We`ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isRequired id="password">
        <FormLabel>Password</FormLabel>
        <Input name="password" type="password" onChange={handleOnChange} />
      </FormControl>

      <Button type="submit">Submit</Button>

      {error && <p>Error: {error.message}</p>}
      {data && <p>{data.message}</p>}
    </Box>
  );
};

export default Login;
