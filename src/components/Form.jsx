import { Box, Button, Spinner } from "@chakra-ui/react";

import PropTypes from "prop-types";

const Form = ({ children, spinner, error, data, handleSubmit }) => {
  return (
    <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="2rem"
    >
      <Box as="form" onSubmit={handleSubmit}>
        {children}
        <Button type="submit">Submit</Button>
        {spinner && <Spinner />}
        {error && <p>Error: {error.message}</p>}
        {data && <p>{data.message}</p>}
      </Box>
    </Box>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  spinner: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default Form;
