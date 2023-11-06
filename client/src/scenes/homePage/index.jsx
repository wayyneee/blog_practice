import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";


const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <div>
      HomePage
    </div>)
};

export default HomePage;
