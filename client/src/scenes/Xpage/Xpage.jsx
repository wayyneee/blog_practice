import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import XIcon from "../../asset/twitterLoginLogo.jpg";
import googleIcon from "../../asset/googleIcon.jpg";
import appleIcon from "../../asset/appleIcon.png";
import FlexBetween from "../../components/FlexBetween";




const Xpagebuttons= () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
  <Box p = "15rem" >
    <Typography
      sx={{
          color : "white"
      }}
      variant="h1"
    >
      正發生
    </Typography>

    <Typography
      sx={{
          color : "white"
      }}
      variant="h1"
    >
        立即加入
    </Typography>

    <Button
      fullWidth
      type="button"
      sx={{
          m: "2rem 0",
          p: "1rem",
          color:"black",
          backgroundColor: "white",
          "&:hover": { backgroundColor:"white"},
          
      }}
    >
      <img src = {googleIcon} alt= "myimg" width = "4%" height="4%" />
      <div style={{paddingLeft:"10px"}}>
        使用Goolge帳戶註冊
      </div>
    </Button>

    <Button
      fullWidth
      type="button"
      sx={{
          m: "2rem 0",
          p: "1rem",
          backgroundColor: "white",
          color:"black",
          "&:hover": { backgroundColor:"white"},
      }}
    >
      <img src = {appleIcon} alt= "myimg" width = "4%"height="4%" />
      <div style={{paddingLeft:"10px"}}>
        使用Apple帳戶註冊
      </div>
    </Button>

    <Box
      sx={{
       backgroundColor: "black",
        color:"gray",
        "&:hover": { backgroundColor:"black"},
        display: "flex"
      }}
    >

      <hr style={{
        width:"46%",
        height:"0%"
      }}/>
      <a>或</a>
      <hr style={{
        width:"46%",
        height:"0%"
      }}/>

    </Box>


    <Button
      fullWidth
      type="button"
      sx={{
          m: "2rem 0",
          p: "1rem",
          backgroundColor: "palegreen",
          color:"black",
          "&:hover": { backgroundColor:"palegreen"},
      }}
    >
      建立帳戶
    </Button>
    
    <Typography
      sx={{
      color : "white"
      }}
      variant="h5"
    >
      已經有帳戶了嗎?
    </Typography>

    <Button

      onClick={()=>{navigate("/Login")}}
      fullWidth
      type="button"
      sx={{
        m: "2rem 0",
        p: "1rem",
        backgroundColor: "palegreen",
        color:"black",
        "&:hover": { backgroundColor:"palegreen"},
      }}
    >
      <img src = {XIcon} alt= "myimg" width = "4%"height="4%" />
      <div style={{paddingLeft:"10px"}}>
        登入
      </div>
    </Button>
  </Box>
  )}

export default Xpagebuttons ;