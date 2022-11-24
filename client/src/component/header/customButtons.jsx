import Profile from "./Profile.jsx";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
// import { Container } from '@mui/system';
import LoginDialog from "../login/LoginDialog";
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-left: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;
const Loginbutton = styled(Button)`
  color: #2874f0;
  background: #fff;
  padding: 5px 40px;
  border-radius: 2px;
  text-transform: none;
  box-shadow: 0px;
  font-weight: 600px;
  height: 32px;
`;
const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const { account } = useContext(DataContext);
  return (
    <Wrapper>
      {
        account ? <Profile  account={account}/>: 
        <Loginbutton variant="contained" onClick={() => openDialog()}>
          Login
        </Loginbutton>
      }
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
