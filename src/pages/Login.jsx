import { useState } from 'react'

import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Box,
  } from '@chakra-ui/react'

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleOnChange = (event) => {
    const { name, value } = event.target
    if (name === 'email') {
    setEmail(value)
    } else if (name === 'password') {
    setPassword(value)
    }
}
const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email)
    console.log(password)
}
  return (
    <Box
    as="form"
    onSubmit={handleSubmit}
    >
    <FormControl isRequired id="email">
      <FormLabel>Email address</FormLabel>
      <Input name='email' type="email" onChange={handleOnChange} />
      <FormHelperText>We`ll never share your email.</FormHelperText>
    </FormControl>

    <FormControl isRequired id="password">
        <FormLabel>Password</FormLabel>
        <Input name='password' type="password" onChange={handleOnChange}/>
    </FormControl>

    <button type="submit">Submit</button>

    </Box>
  )
}

export default Login