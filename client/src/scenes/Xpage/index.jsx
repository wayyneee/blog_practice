import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import React from 'react';
import Myimg from "../../asset/twitterLoginLogo.jpg"
import Xpagebuttons from "./Xpage";

const Xpage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
    bgcolor = "black"
    height= "100%"
    >
      {isNonMobileScreens ?(
          <FlexBetween>
            <Box

              p="1.5rem"
              m="2rem"
              bgcolor = "black"
              >
              <img src = {Myimg} alt= "myimg" width = "100%"/>
            </Box>
            <Box
    
              p="1.5rem"
              m="2rem auto"
              bgcolor = "black"
            >
              <Xpagebuttons/>
            </Box>
          </FlexBetween>
        )
      :
        ( <div>
            <Box
              p="1.5rem"
              m="2rem"
              bgcolor = "black"
              >
              <img src = {Myimg} alt= "myimg" width = "10%"height="10%"/>
            </Box>
            <Box

              p="1.5rem"
              m="2rem auto"
              bgcolor = "black"
            >
              <Xpagebuttons/>
            </Box>
          </div>
        )
      }
    </Box>
  )
};

export default Xpage;
