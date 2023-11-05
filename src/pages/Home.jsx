import { Link } from "react-router-dom"
import { Box, Button, Divider } from "@chakra-ui/react"

const Home = () => {
  return (
    <Box
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
    >
        <h1>Home</h1>
        <Box
            m="50px"
            p="50px"
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
          <Button as={Link} to="/login">Login</Button>
            <Divider
             w="50%"
             my="10px"
           />
          <Button as={Link} to="/register">Register</Button>
        </Box>
    </Box>
  )
}

export default Home