import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import FlexBetween from "../../components/FlexBetween";
import React from 'react';
import Myimg from "../../asset/twitterLoginLogo.jpg"


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      height="100%"
      bgcolor = "black"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >

        <Box
          bgcolor= "gray"
          height="60%"
          width="60%"
          display="flex"
          justifyContent="center"
          alignItems="center"

        >
          <Form/>
        </Box>
    </Box>
  );
};

export default LoginPage;
