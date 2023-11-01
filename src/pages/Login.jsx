import { useState } from "react";
import { API_URL } from "../utils/constantes";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const { mutate, error, data } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => axios.post(`${API_URL}/login`, { email, password })
      .then((res) => setId(res.data[0].id))
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
    setSpinner(true);
    mutate({},
      {
        onSuccess: () => {
          setSpinner(false);
          navigate(`/perfil/${id}`);
        },
        onError: () => {
          setSpinner(false);
        },
      }
      );
  };
  return (
    <Form handleSubmit={handleSubmit} spinner={spinner} error={error} data={data}>
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

export default Login;
