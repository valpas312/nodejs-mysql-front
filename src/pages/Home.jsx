import { Link } from "react-router-dom"
import { Divider } from "@chakra-ui/react"

const Home = () => {
  return (
    <>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
        <Divider />
        <Link to="/register">Register</Link>
    </>
  )
}

export default Home