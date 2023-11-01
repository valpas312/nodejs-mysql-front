import { useState } from "react";
import { API_URL } from "../utils/constantes";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Form from "../components/Form";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  const { mutate, error, data } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => axios.post(`${API_URL}/register`, { name, email, password, salary: "0" })
      .then((res) => console.log(res.data))
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
    } else if (name === "name") {
      setName(value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({},{
      onSuccess: () => {
        setSpinner(false);
        navigate("/login");
      },
      onError: () => {
        setSpinner(false);
      },
    });
  };
  return (
    <Form handleSubmit={handleSubmit} spinner={spinner} error={error} data={data}>
      <FormControl isRequired id="name">
        <FormLabel>Name</FormLabel>
        <Input name="name" type="text" onChange={handleOnChange} />
      </FormControl>
      <FormControl isRequired id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" onChange={handleOnChange} />
        <FormHelperText>We`ll never share your email.</FormHelperText>
      </FormControl>
      <FormControl isRequired id="password">
        <FormLabel>Password</FormLabel>
        <Input name="password" type="password" onChange={handleOnChange} />
      </FormControl>
    </Form>
  );
};

export default Register;