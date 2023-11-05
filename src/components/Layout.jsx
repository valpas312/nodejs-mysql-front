import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types"

const Layout = ({children}) => {
  return (
    <Box>
        <Box
            w="100%"
            h="60px"
            bg="gray.100"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <h1>Layout</h1>
        </Box>
        {children}
    </Box>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout